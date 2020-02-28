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

    $fieldControlBodytext = [
        'loremIpsum' => [
            'renderType' => 'loremIpsumWizard',
            'disabled' => false,
            'options' => [
                'min' => 5,
                'max' => 10,
                'type' => 'bodytext',
                'actions' => [
                    0 => [
                        'title' => 'LLL:EXT:dummy_content/Resources/Private/Language/Labels.xlf:short',
                        'type' => 'sentence',
                        'minWords' => 15,
                        'maxWords' => 50,
                    ],
                    1 => [
                        'title' => 'LLL:EXT:dummy_content/Resources/Private/Language/Labels.xlf:medium',
                        'type' => 'paragraph',
                        'minWords' => 50,
                        'maxWords' => 150,
                        'minParagraphs' => 1,
                        'maxParagraphs' => 2,
                    ],
                    2 => [
                        'title' => 'LLL:EXT:dummy_content/Resources/Private/Language/Labels.xlf:long',
                        'type' => 'paragraph',
                        'minWords' => 150,
                        'maxWords' => 300,
                        'minParagraphs' => 1,
                        'maxParagraphs' => 3,
                    ],
                ]
            ]
        ],
    ];


    // Headers in Content Elements:

    $GLOBALS['TCA']['tt_content']['columns']['header']['config']['fieldWizard'] = array_merge((array)($GLOBALS['TCA']['tt_content']['columns']['header']['config']['fieldWizard']), $fieldControlHeader);

    $GLOBALS['TCA']['tt_content']['columns']['subheader']['config']['fieldWizard'] = array_merge((array)($GLOBALS['TCA']['tt_content']['columns']['subheader']['config']['fieldWizard']), $fieldControlHeader);


    // Bodytext field in Content Elements:

    $GLOBALS['TCA']['tt_content']['columns']['bodytext']['config']['fieldWizard'] = array_merge((array)($GLOBALS['TCA']['tt_content']['columns']['bodytext']['config']['fieldWizard']), $fieldControlBodytext);

})();

