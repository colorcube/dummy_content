<?php


defined('TYPO3_MODE') || die();

(static function () {

    // Page titles:

    $GLOBALS['TCA']['pages']['columns']['title']['config']['fieldWizard'] = array_merge((array)($GLOBALS['TCA']['pages']['columns']['title']['config']['fieldWizard']), \Colorcube\DummyContent\TcaPresets::getFieldControlForHeader());

    $GLOBALS['TCA']['pages']['columns']['subtitle']['config']['fieldWizard'] = array_merge((array)($GLOBALS['TCA']['pages']['columns']['subtitle']['config']['fieldWizard']), \Colorcube\DummyContent\TcaPresets::getFieldControlForHeader());

    $GLOBALS['TCA']['pages']['columns']['nav_title']['config']['fieldWizard'] = array_merge((array)($GLOBALS['TCA']['pages']['columns']['nav_title']['config']['fieldWizard']), \Colorcube\DummyContent\TcaPresets::getFieldControlForHeader());


})();

