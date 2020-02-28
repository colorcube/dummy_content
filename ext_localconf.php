<?php
defined('TYPO3_MODE') || die();


(static function () {

    if (TYPO3_MODE === 'BE') {
        $GLOBALS['TYPO3_CONF_VARS']['SYS']['formEngine']['nodeRegistry'][1582735341] = [
            'nodeName' => 'loremIpsumWizard',
            'priority' => 80,
            'class' => \Colorcube\DummyContent\Form\DummyContentWizard::class
        ];
    }

})();
