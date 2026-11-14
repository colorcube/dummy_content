<?php
declare(strict_types=1);

namespace Colorcube\DummyContent\Form;

use TYPO3\CMS\Backend\Form\AbstractNode;
use TYPO3\CMS\Core\Authentication\BackendUserAuthentication;
use TYPO3\CMS\Core\Localization\LanguageService;
use TYPO3\CMS\Core\Page\JavaScriptModuleInstruction;
use TYPO3\CMS\Core\Routing\SiteMatcher;
use TYPO3\CMS\Core\Utility\GeneralUtility;

/**
 * Dummy Content dummy text wizard
 */
class DummyContentWizard extends AbstractNode
{
    /**
     * Render buttons which insert dummy text in form fields
     *
     * @return array
     */
    public function render(): array
    {
        $languageService = $this->getLanguageService();

        $options = $this->data['renderData']['fieldWizardOptions'];
        $actions = $options['actions'];

        $parameterArray = $this->data['parameterArray'];
        $itemName = (string)$parameterArray['itemFormElName'];
        $isRTE = (bool)($parameterArray['fieldConf']['config']['enableRichtext'] ?? false);
        $lang = $this->getRecordLanguage($this->data);

        $html = [];
        $html[] = '<div class="help-block">';
        $html[] = htmlspecialchars($languageService->sL('LLL:EXT:dummy_content/Resources/Private/Language/Labels.xlf:dummyText')) . ' ';
        foreach ($actions as $action) {
            $title = $languageService->sL($action['title']);

            unset($action['title']);
            $action['html'] = $isRTE;

            $attributes = [
                'type' => 'button',
                'class' => 'btn btn-info',
                'data-dummy-content-target' => $itemName,
                'data-dummy-content-rte' => $isRTE ? '1' : '0',
                'data-dummy-content-rte-id' => $isRTE ? $this->sanitizeFieldId($itemName) : '',
                'data-dummy-content-action' => (string)json_encode($action),
                'data-dummy-content-lang' => $lang,
            ];

            $attrParts = [];
            foreach ($attributes as $attrName => $attrValue) {
                if ($attrValue === '' && $attrName === 'data-dummy-content-rte-id') {
                    continue;
                }
                $attrParts[] = $attrName . '="' . htmlspecialchars($attrValue, ENT_QUOTES) . '"';
            }

            $html[] = '<button ' . implode(' ', $attrParts) . '>' . htmlspecialchars($title) . '</button>';
        }
        $html[] = '</div>';

        $result = $this->initializeResultArray();
        $result['html'] = implode(LF, $html);
        $result['javaScriptModules'][] = JavaScriptModuleInstruction::create('@colorcube/dummy_content/LoremIpsum.js');

        return $result;
    }

    /**
     * Returns language iso 2 code for record
     *
     * @param array $data
     * @return string
     */
    protected function getRecordLanguage(array $data): string
    {
        try {
            $rawLangUid = $data['databaseRow']['sys_language_uid'] ?? 0;
            $languageId = is_array($rawLangUid) ? (int)($rawLangUid[0] ?? 0) : (int)$rawLangUid;
            if ($languageId < 0) {
                $languageId = 0;
            }
            $site = GeneralUtility::makeInstance(SiteMatcher::class)->matchByPageId((int)($data['databaseRow']['pid'] ?? 0));
            $siteLanguage = $site->getLanguageById($languageId);
            return $siteLanguage->getLocale()->getLanguageCode();
        } catch (\Throwable $e) {
        }
        return 'en';
    }

    /**
     * @param string $itemFormElementName
     * @return string
     */
    protected function sanitizeFieldId(string $itemFormElementName): string
    {
        $fieldId = (string)preg_replace('/[^a-zA-Z0-9_:.-]/', '_', $itemFormElementName);
        return (string)preg_replace('/^[^a-zA-Z]/', 'x', $fieldId);
    }

    /**
     * @return LanguageService
     */
    protected function getLanguageService(): LanguageService
    {
        return $GLOBALS['LANG'];
    }

    /**
     * @return BackendUserAuthentication
     */
    protected function getBackendUser(): BackendUserAuthentication
    {
        return $GLOBALS['BE_USER'];
    }
}
