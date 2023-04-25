<?php
declare(strict_types=1);

namespace Colorcube\DummyContent\Form;


use TYPO3\CMS\Backend\Form\AbstractNode;
use TYPO3\CMS\Core\Authentication\BackendUserAuthentication;
use TYPO3\CMS\Core\Localization\LanguageService;
use TYPO3\CMS\Core\Routing\SiteMatcher;
use TYPO3\CMS\Core\Utility\GeneralUtility;

/**
 * Dummy Content dummy text wizard
 */
class DummyContentWizard extends AbstractNode
{
    /**
     * Render buttons which insert dummy text in form form fields
     *
     * @return array
     */
    public function render(): array
    {
        $languageService = $this->getLanguageService();

        $options = $this->data['renderData']['fieldWizardOptions'];
        $actions = $options['actions'];

        $parameterArray = $this->data['parameterArray'];
        $itemName = $parameterArray['itemFormElName'];
        $isRTE = (bool)($parameterArray['fieldConf']['config']['enableRichtext'] ?? false);

        $html = [];
        $html[] = '<div class="help-block">';
        $html[] = htmlspecialchars($languageService->sL('LLL:EXT:dummy_content/Resources/Private/Language/Labels.xlf:dummyText')) . ' ';
        foreach ($actions as $action) {
            $title = $languageService->sL($action['title']);

            unset($action['title']);
            $action['html'] = $isRTE;
            $lang = $this->getRecordLanguage($this->data);
            // is this the right way to get an instance with requirejs?
            $loremIpsum = "var LoremIpsumObj = require('TYPO3/CMS/DummyContent/LoremIpsum'); var loremIpsum = new LoremIpsumObj(" . json_encode($action) . ", " . json_encode($lang) . "); ";

            if ($isRTE) {
                $itemNameRTE = $this->sanitizeFieldId($itemName);
                //  CKEDITOR.instances.data_tt_content__7__header_.insertText("Magical ponies await!")
                $onChange = $loremIpsum . 'CKEDITOR.instances.' . $itemNameRTE . '.setData(loremIpsum.generate()); CKEDITOR.instances.' . $itemNameRTE . '.resetDirty(); this.blur(); return false;';
            } else {
                $onChange = $loremIpsum . 'var el = document.querySelectorAll(' . GeneralUtility::quoteJSvalue('[data-formengine-input-name="' . $itemName . '"]') . ')[0]; '.
                    'el.value=loremIpsum.generate(); '.
                    'TBE_EDITOR.fieldChanged_fName("' . $itemName . '", "' . $itemName . '"); '.
                    'this.blur(); return false;';
            }

            $html[] = '<button type="button" class="btn btn-info"  onclick="' . htmlspecialchars($onChange) . '">' . htmlspecialchars($title) . '</button>';
        }
        $html[] = '</div>';

        $result['html'] = implode(LF, $html);

        $result['requireJsModules'] = ['TYPO3/CMS/DummyContent/LoremIpsum'];
        return $result;
    }


    /**
     * Returns language iso 2 code for record
     *
     * not perfectly working!
     *
     * @param $data
     * @return string
     */
    protected function getRecordLanguage($data)
    {
        try {
            if (class_exists("\TYPO3\CMS\Core\Routing\SiteMatcher")) {
                // TYPO3 9.x
                $site = GeneralUtility::makeInstance(SiteMatcher::class)->matchByPageId((int)$data['databaseRow']['pid']);
                $siteLanguage = $site->getLanguageById((int)($data['databaseRow']['sys_language_uid'][0] ?? 0));
                return $siteLanguage->getTwoLetterIsoCode() ?? 'en';
            } else {
                // TYPO3 8.x
                // this doesn't work for sys_language_uid = 0  :-( returns DEF
                $lang = $this->data['systemLanguageRows'][$data['databaseRow']['sys_language_uid'][0]]['iso'];
                return ($lang == 'DEF') ? 'en' : $lang;
            }
        } catch (\Exception $e) {
        }
        return 'en';
    }


    /**
     * @param string $itemFormElementName
     * @return string
     */
    protected function sanitizeFieldId(string $itemFormElementName): string
    {
        $fieldId = preg_replace('/[^a-zA-Z0-9_:.-]/', '_', $itemFormElementName);
        return htmlspecialchars(preg_replace('/^[^a-zA-Z]/', 'x', $fieldId));
    }

    /**
     * @return LanguageService
     */
    protected function getLanguageService()
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

