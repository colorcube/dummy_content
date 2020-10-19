<?php
declare(strict_types=1);

namespace Colorcube\DummyContent;

abstract class TcaPresets {

    public static function getFieldControlForHeader(): array
    {
        return  [
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
    }


    public static function getFieldControlForTeaser(): array
    {
        return  [
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
                            'type' => 'sentence',
                            'minWords' => 50,
                            'maxWords' => 100,
                        ],
                        2 => [
                            'title' => 'LLL:EXT:dummy_content/Resources/Private/Language/Labels.xlf:long',
                            'type' => 'sentence',
                            'minWords' => 100,
                            'maxWords' => 150,
                        ],
                    ]
                ]
            ],
        ];
    }


    public static function getFieldControlForBodytext(): array
    {
        return  [
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
    }
}
