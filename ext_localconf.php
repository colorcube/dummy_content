<?php

defined('TYPO3') || die();

(static function () {
    $GLOBALS['TYPO3_CONF_VARS']['SYS']['formEngine']['nodeRegistry'][1582735341] = [
        'nodeName' => 'loremIpsumWizard',
        'priority' => 80,
        'class' => \Colorcube\DummyContent\Form\DummyContentWizard::class,
    ];
})();
