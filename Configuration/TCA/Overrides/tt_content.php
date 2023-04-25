<?php
defined('TYPO3_MODE') || die();

(static function () {

    // Headers in Content Elements:

    $GLOBALS['TCA']['tt_content']['columns']['header']['config']['fieldWizard'] = array_merge(($GLOBALS['TCA']['tt_content']['columns']['header']['config']['fieldWizard'] ?? []), \Colorcube\DummyContent\TcaPresets::getFieldControlForHeader());

    $GLOBALS['TCA']['tt_content']['columns']['subheader']['config']['fieldWizard'] = array_merge(($GLOBALS['TCA']['tt_content']['columns']['subheader']['config']['fieldWizard'] ?? []), \Colorcube\DummyContent\TcaPresets::getFieldControlForHeader());


    // Bodytext field in Content Elements:

    $GLOBALS['TCA']['tt_content']['columns']['bodytext']['config']['fieldWizard'] = array_merge(($GLOBALS['TCA']['tt_content']['columns']['bodytext']['config']['fieldWizard'] ?? []), \Colorcube\DummyContent\TcaPresets::getFieldControlForBodytext());

})();

