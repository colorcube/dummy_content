<?php
defined('TYPO3_MODE') || die();

(static function () {

    $fieldControlHeader = [
        'loremIpsum' => [
            'renderType' => 'loremIpsumWizard',
            'disabled' => false,
            'options' => [
                'type' => 'header',
                'actions' => [
                    0 => [
                        'title' => 'LLL:EXT:dummy_content/Resources/Private/Language/Labels.xlf:short',
                        'type' => 'header',
                        'minWords' => 3,
                        'maxWords' => 5,
                    ],
                    1 => [
                        'title' => 'LLL:EXT:dummy_content/Resources/Private/Language/Labels.xlf:medium',
                        'type' => 'header',
                        'minWords' => 5,
                        'maxWords' => 10,
                    ],
                    2 => [
                        'title' => 'LLL:EXT:dummy_content/Resources/Private/Language/Labels.xlf:long',
                        'type' => 'header',
                        'minWords' => 10,
                        'maxWords' => 15,
                    ],
                ]
            ]
        ],
    ];


    // Page titles:

    $GLOBALS['TCA']['pages']['columns']['title']['config']['fieldWizard'] = array_merge((array)($GLOBALS['TCA']['pages']['columns']['title']['config']['fieldWizard']), $fieldControlHeader);

    $GLOBALS['TCA']['pages']['columns']['subtitle']['config']['fieldWizard'] = array_merge((array)($GLOBALS['TCA']['pages']['columns']['subtitle']['config']['fieldWizard']), $fieldControlHeader);

    $GLOBALS['TCA']['pages']['columns']['nav_title']['config']['fieldWizard'] = array_merge((array)($GLOBALS['TCA']['pages']['columns']['nav_title']['config']['fieldWizard']), $fieldControlHeader);


})();

