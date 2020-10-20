# Dummy Content TYPO3 Extension

This is a TYPO3 extension.

## What does it do?

With this extension an editor can quickly add some dummy text to pages and content with a click.

Buttons are added to a set of backend form fields like _title_, _header_, _bodytext_. A click on those buttons will
add dummy text to the form field.

Currently following content types are preconfigured

- pages
- content (tt_content)
- news (tx_news_domain_model_news)

## Installation

Install the extension by using composer and `composer req colorcube/dummy-content` or by downloading it in the extension
manager or on https://extensions.typo3.org/extension/dummy_content/.

Tested with TYPO3 v8.7, v9.5 and v10.4. 

## Usage

Click on the dummy text buttons to create texts with different length. The text replaces the current content.

![Screenshot](Documentation/Images/Screenshot.png)

## Languages

While the default dummy text is based on the well known 'Lorem ipsum', the generated text is modified to match the
currently edited language if possible. For Example in the german language the umlauts *äöüß* are added. Currently rules
for the following languages are available:

- german (de)
- french (fr)

Have a look into Resources/Public/JavaScript/LoremIpsum.js at `LoremIpsum.languages` how to add new languages.

## Configuration

Currently there's no way to configure the extension, but a developer can easily add the wizard buttons to other tables
and fields than the predefined.

Have a look in `Configuration/TCA/Overrides` and the way the TCA configuration is added to enable the wizard button.

## Usage in Own Extension

You can provide TCA configuration in your own extension to activate dummy_content.

Example for a extension *site_events*

File site_events/Configuration/TCA/Overrides/tx_siteevents_domain_model_event.php:
    
   
```php
<?php
if (class_exists('\Colorcube\DummyContent\TcaPresets')) {
    $GLOBALS['TCA']['tx_siteevents_domain_model_event']['columns']['title']['config']['fieldWizard'] = array_merge(
        (array)($GLOBALS['TCA']['tx_siteevents_domain_model_event']['columns']['title']['config']['fieldWizard']), 
        \Colorcube\DummyContent\TcaPresets::getFieldControlForHeader()
    );
    $GLOBALS['TCA']['tx_siteevents_domain_model_event']['columns']['subtitle']['config']['fieldWizard'] = array_merge(
        (array)($GLOBALS['TCA']['tx_siteevents_domain_model_event']['columns']['subtitle']['config']['fieldWizard']), 
        \Colorcube\DummyContent\TcaPresets::getFieldControlForHeader()
    );
    $GLOBALS['TCA']['tx_siteevents_domain_model_event']['columns']['teaser']['config']['fieldWizard'] = array_merge(
        (array)($GLOBALS['TCA']['tx_siteevents_domain_model_event']['columns']['teaser']['config']['fieldWizard']), 
        \Colorcube\DummyContent\TcaPresets::getFieldControlForTeaser()
    );
    $GLOBALS['TCA']['tx_siteevents_domain_model_event']['columns']['description']['config']['fieldWizard'] = array_merge(
        (array)($GLOBALS['TCA']['tx_siteevents_domain_model_event']['columns']['description']['config']['fieldWizard']), 
        \Colorcube\DummyContent\TcaPresets::getFieldControlForBodytext()
    );
} 
```

## Todo

- add more configuration for common used content types like tt_address or image captions
- would be nice to have a way to quickly add images like the old dummy_content extension did
- use different text for languages with non-ascii alphabets like russian
- add generator for author names or dates (past and future)


## Contribute

- Send pull requests to the repository. <https://github.com/colorcube/dummy_content>
- Use the issue tracker for feedback and discussions. <https://github.com/colorcube/dummy_content/issues>


