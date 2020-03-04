/**
 * create dummy text
 *
 * based on
 * https://raw.githubusercontent.com/fffilo/lorem-ipsum-js/master/src/lorem-ipsum.js
 * https://raw.githubusercontent.com/f/loremjs/master/lorem.js
 *
 * @exports TYPO3/CMS/LoremIpsum/LoremIpsum
 */
define(function () {
    'use strict';

    /**
     * constructor
     */
    var LoremIpsum = function (config = [], language = null) {
        this.config = Object.assign(this.config, config);
        if (language) {
            this.language = language;
        }
    };


    /**
     * main function to generate dummy text
     * @returns {any}
     */
    LoremIpsum.prototype.generate = function () {
        switch (this.config.type) {
            case 'paragraph':
                return this.paragraph(this.config.minWords, this.config.maxWords, this.config.minParagraphs, this.config.maxParagraphs, this.config.html);
            case 'sentence':
                return this.sentence(this.config.minWords, this.config.maxWords);
            case 'header':
                return this.sentence(this.config.minWords, this.config.maxWords, false);
            default:
                return this.words(this.config.minWords, this.config.maxWords);
        }
    };

    /**
     * default config
     */
    LoremIpsum.prototype.config = {
        'minWords': 15,
        'maxWords': 30,
        'minParagraphs': 0,
        'maxParagraphs': 0,
        'html': false
    };

    /**
     * defaut language
     * @type {string}
     */
    LoremIpsum.prototype.language = 'en';

    /**
     * Possible words
     *
     * @type {Array}
     */
    LoremIpsum.prototype._words = [
        "lorem", "ipsum", "dolor", "sit", "amet", "consectetur", "adipiscing", "elit", "ut", "aliquam", "purus", "sit", "amet", "luctus", "venenatis", "lectus", "magna", "fringilla", "urna", "porttitor", "rhoncus", "dolor", "purus", "non", "enim", "praesent", "elementum", "facilisis", "leo", "vel", "fringilla", "est", "ullamcorper", "eget", "nulla", "facilisi", "etiam", "dignissim", "diam", "quis", "enim", "lobortis", "scelerisque", "fermentum", "dui", "faucibus", "in", "ornare", "quam", "viverra", "orci", "sagittis", "eu", "volutpat", "odio", "facilisis", "mauris", "sit", "amet", "massa", "vitae", "tortor", "condimentum", "lacinia", "quis", "vel", "eros", "donec", "ac", "odio", "tempor", "orci", "dapibus", "ultrices", "in", "iaculis", "nunc", "sed", "augue", "lacus", "viverra", "vitae", "congue", "eu", "consequat", "ac", "felis", "donec", "et", "odio", "pellentesque", "diam", "volutpat", "commodo", "sed", "egestas", "egestas", "fringilla", "phasellus", "faucibus", "scelerisque", "eleifend", "donec", "pretium", "vulputate", "sapien", "nec", "sagittis", "aliquam", "malesuada", "bibendum", "arcu", "vitae", "elementum",
        "curabitur", "vitae", "nunc", "sed", "velit", "dignissim", "sodales", "ut", "eu", "sem", "integer", "vitae", "justo", "eget", "magna", "fermentum", "iaculis", "eu", "non", "diam", "phasellus", "vestibulum", "lorem", "sed", "risus", "ultricies", "tristique", "nulla", "aliquet", "enim", "tortor", "at", "auctor", "urna", "nunc", "id", "cursus", "metus", "aliquam", "eleifend", "mi", "in", "nulla", "posuere", "sollicitudin", "aliquam", "ultrices", "sagittis", "orci", "a", "scelerisque", "purus", "semper", "eget", "duis", "at", "tellus", "at", "urna", "condimentum", "mattis", "pellentesque", "id", "nibh", "tortor", "id", "aliquet", "lectus", "proin", "nibh", "nisl", "condimentum", "id", "venenatis", "a", "condimentum", "vitae", "sapien", "pellentesque", "habitant", "morbi", "tristique", "senectus", "et", "netus", "et", "malesuada", "fames", "ac", "turpis", "egestas", "sed", "tempus", "urna", "et", "pharetra", "pharetra", "massa", "massa", "ultricies", "mi", "quis", "hendrerit", "dolor", "magna", "eget", "est", "lorem", "ipsum", "dolor", "sit", "amet", "consectetur", "adipiscing", "elit", "pellentesque", "habitant", "morbi", "tristique", "senectus", "et", "netus", "et", "malesuada", "fames", "ac", "turpis", "egestas", "integer", "eget", "aliquet", "nibh", "praesent", "tristique", "magna", "sit", "amet", "purus", "gravida", "quis", "blandit", "turpis", "cursus", "in", "hac", "habitasse", "platea", "dictumst", "quisque", "sagittis", "purus", "sit", "amet", "volutpat", "consequat", "mauris", "nunc", "congue", "nisi", "vitae", "suscipit", "tellus", "mauris", "a", "diam",
        "maecenas", "sed", "enim", "ut", "sem", "viverra", "aliquet", "eget", "sit", "amet", "tellus", "cras", "adipiscing", "enim", "eu", "turpis", "egestas", "pretium", "aenean", "pharetra", "magna", "ac", "placerat", "vestibulum", "lectus", "mauris", "ultrices", "eros", "in", "cursus", "turpis", "massa", "tincidunt", "dui", "ut", "ornare", "lectus", "sit", "amet", "est", "placerat", "in", "egestas", "erat", "imperdiet", "sed", "euismod", "nisi", "porta", "lorem", "mollis", "aliquam", "ut", "porttitor", "leo", "a", "diam", "sollicitudin", "tempor", "id", "eu", "nisl", "nunc", "mi", "ipsum", "faucibus", "vitae", "aliquet", "nec", "ullamcorper", "sit", "amet", "risus", "nullam", "eget", "felis", "eget", "nunc", "lobortis", "mattis", "aliquam", "faucibus", "purus", "in", "massa", "tempor", "nec", "feugiat", "nisl", "pretium", "fusce", "id", "velit", "ut", "tortor", "pretium", "viverra", "suspendisse", "potenti", "nullam", "ac", "tortor", "vitae", "purus", "faucibus", "ornare", "suspendisse", "sed", "nisi", "lacus", "sed", "viverra", "tellus", "in", "hac", "habitasse", "platea", "dictumst", "vestibulum", "rhoncus", "est", "pellentesque", "elit", "ullamcorper", "dignissim", "cras", "tincidunt", "lobortis", "feugiat", "vivamus", "at", "augue", "eget", "arcu", "dictum", "varius", "duis", "at", "consectetur", "lorem",
        "donec", "massa", "sapien", "faucibus", "et", "molestie", "ac", "feugiat", "sed", "lectus", "vestibulum", "mattis", "ullamcorper", "velit", "sed", "ullamcorper", "morbi", "tincidunt", "ornare", "massa", "eget", "egestas", "purus", "viverra", "accumsan", "in", "nisl", "nisi", "scelerisque", "eu", "ultrices", "vitae", "auctor", "eu", "augue", "ut", "lectus", "arcu", "bibendum", "at", "varius", "vel", "pharetra", "vel", "turpis", "nunc", "eget", "lorem", "dolor", "sed", "viverra", "ipsum", "nunc", "aliquet", "bibendum", "enim", "facilisis", "gravida", "neque", "convallis", "a", "cras", "semper", "auctor", "neque", "vitae", "tempus", "quam", "pellentesque", "nec", "nam", "aliquam", "sem", "et", "tortor", "consequat", "id", "porta", "nibh", "venenatis", "cras", "sed", "felis", "eget", "velit", "aliquet", "sagittis", "id", "consectetur", "purus", "ut", "faucibus", "pulvinar", "elementum", "integer", "enim", "neque", "volutpat", "ac", "tincidunt", "vitae", "semper", "quis", "lectus", "nulla", "at", "volutpat", "diam", "ut", "venenatis", "tellus", "in", "metus", "vulputate", "eu", "scelerisque", "felis", "imperdiet", "proin", "fermentum", "leo", "vel", "orci", "porta", "non", "pulvinar", "neque", "laoreet", "suspendisse", "interdum", "consectetur", "libero", "id", "faucibus", "nisl", "tincidunt", "eget", "nullam", "non", "nisi", "est", "sit", "amet", "facilisis", "magna",
        "etiam", "tempor", "orci", "eu", "lobortis", "elementum", "nibh", "tellus", "molestie", "nunc", "non", "blandit", "massa", "enim", "nec", "dui", "nunc", "mattis", "enim", "ut", "tellus", "elementum", "sagittis", "vitae", "et", "leo", "duis", "ut", "diam", "quam", "nulla", "porttitor", "massa", "id", "neque", "aliquam", "vestibulum", "morbi", "blandit", "cursus", "risus", "at", "ultrices", "mi", "tempus", "imperdiet", "nulla", "malesuada", "pellentesque", "elit", "eget", "gravida", "cum", "sociis", "natoque", "penatibus", "et", "magnis", "dis", "parturient", "montes", "nascetur", "ridiculus", "mus", "mauris", "vitae", "ultricies", "leo", "integer", "malesuada", "nunc", "vel", "risus", "commodo", "viverra", "maecenas", "accumsan", "lacus", "vel", "facilisis", "volutpat", "est", "velit", "egestas", "dui", "id", "ornare", "arcu", "odio", "ut", "sem", "nulla", "pharetra", "diam", "sit", "amet", "nisl", "suscipit", "adipiscing", "bibendum", "est", "ultricies", "integer", "quis", "auctor", "elit",
        "sed", "vulputate", "mi", "sit", "amet", "mauris", "commodo", "quis", "imperdiet", "massa", "tincidunt", "nunc", "pulvinar", "sapien", "et", "ligula", "ullamcorper", "malesuada", "proin", "libero", "nunc", "consequat", "interdum", "varius", "sit", "amet", "mattis", "vulputate", "enim", "nulla", "aliquet", "porttitor", "lacus", "luctus", "accumsan", "tortor", "posuere", "ac", "ut", "consequat", "semper", "viverra", "nam", "libero", "justo", "laoreet", "sit", "amet", "cursus", "sit", "amet", "dictum", "sit", "amet", "justo", "donec", "enim", "diam", "vulputate", "ut", "pharetra", "sit", "amet", "aliquam", "id", "diam", "maecenas", "ultricies", "mi", "eget", "mauris", "pharetra", "et", "ultrices", "neque", "ornare", "aenean", "euismod", "elementum", "nisi", "quis", "eleifend", "quam", "adipiscing", "vitae", "proin", "sagittis", "nisl", "rhoncus", "mattis", "rhoncus", "urna", "neque", "viverra", "justo", "nec", "ultrices", "dui", "sapien", "eget", "mi", "proin", "sed", "libero", "enim", "sed", "faucibus", "turpis", "in", "eu", "mi", "bibendum", "neque", "egestas", "congue", "quisque", "egestas", "diam", "in", "arcu", "cursus", "euismod", "quis", "viverra", "nibh", "cras", "pulvinar", "mattis", "nunc", "sed", "blandit", "libero", "volutpat", "sed", "cras", "ornare", "arcu", "dui", "vivamus", "arcu", "felis", "bibendum", "ut", "tristique", "et", "egestas", "quis", "ipsum", "suspendisse", "ultrices", "gravida", "dictum",
        "fusce", "ut", "placerat", "orci", "nulla", "pellentesque", "dignissim", "enim", "sit", "amet", "venenatis", "urna", "cursus", "eget", "nunc", "scelerisque", "viverra", "mauris", "in", "aliquam", "sem", "fringilla", "ut", "morbi", "tincidunt", "augue", "interdum", "velit", "euismod", "in", "pellentesque", "massa", "placerat", "duis", "ultricies", "lacus", "sed", "turpis", "tincidunt", "id", "aliquet", "risus", "feugiat", "in", "ante", "metus", "dictum", "at", "tempor", "commodo", "ullamcorper", "a", "lacus", "vestibulum", "sed", "arcu", "non", "odio", "euismod", "lacinia", "at", "quis", "risus", "sed", "vulputate", "odio", "ut", "enim", "blandit", "volutpat", "maecenas", "volutpat", "blandit", "aliquam", "etiam", "erat", "velit", "scelerisque", "in", "dictum", "non", "consectetur", "a", "erat", "nam", "at", "lectus", "urna", "duis", "convallis", "convallis", "tellus", "id", "interdum", "velit", "laoreet", "id", "donec", "ultrices", "tincidunt", "arcu", "non", "sodales", "neque", "sodales", "ut", "etiam", "sit", "amet", "nisl", "purus", "in", "mollis", "nunc",
        "sed", "id", "semper", "risus", "in", "hendrerit", "gravida", "rutrum", "quisque", "non", "tellus", "orci", "ac", "auctor", "augue", "mauris", "augue", "neque", "gravida", "in", "fermentum", "et", "sollicitudin", "ac", "orci", "phasellus", "egestas", "tellus", "rutrum", "tellus", "pellentesque", "eu", "tincidunt", "tortor", "aliquam", "nulla", "facilisi", "cras", "fermentum", "odio", "eu", "feugiat", "pretium", "nibh", "ipsum", "consequat", "nisl", "vel", "pretium", "lectus", "quam", "id", "leo", "in", "vitae", "turpis", "massa", "sed", "elementum", "tempus", "egestas", "sed", "sed", "risus", "pretium", "quam", "vulputate", "dignissim", "suspendisse", "in", "est", "ante", "in", "nibh", "mauris", "cursus", "mattis", "molestie", "a", "iaculis", "at", "erat",
        "pellentesque", "adipiscing", "commodo", "elit", "at", "imperdiet", "dui", "accumsan", "sit", "amet", "nulla", "facilisi", "morbi", "tempus", "iaculis", "urna", "id", "volutpat", "lacus", "laoreet", "non", "curabitur", "gravida", "arcu", "ac", "tortor", "dignissim", "convallis", "aenean", "et", "tortor", "at", "risus", "viverra", "adipiscing", "at", "in", "tellus", "integer", "feugiat", "scelerisque", "varius", "morbi", "enim", "nunc", "faucibus", "a", "pellentesque", "sit", "amet", "porttitor", "eget", "dolor", "morbi", "non", "arcu", "risus", "quis", "varius", "quam", "quisque", "id", "diam", "vel", "quam", "elementum", "pulvinar", "etiam", "non", "quam", "lacus", "suspendisse", "faucibus", "interdum", "posuere", "lorem", "ipsum", "dolor", "sit", "amet", "consectetur", "adipiscing", "elit", "duis", "tristique", "sollicitudin", "nibh", "sit", "amet", "commodo", "nulla", "facilisi",
        "nullam", "vehicula", "ipsum", "a", "arcu", "cursus", "vitae", "congue", "mauris", "rhoncus", "aenean", "vel", "elit", "scelerisque", "mauris", "pellentesque", "pulvinar", "pellentesque", "habitant", "morbi", "tristique", "senectus", "et", "netus", "et", "malesuada", "fames", "ac", "turpis", "egestas", "maecenas", "pharetra", "convallis", "posuere", "morbi", "leo", "urna", "molestie", "at", "elementum", "eu", "facilisis", "sed", "odio", "morbi", "quis", "commodo", "odio", "aenean", "sed", "adipiscing", "diam", "donec", "adipiscing", "tristique", "risus", "nec", "feugiat", "in", "fermentum", "posuere", "urna", "nec", "tincidunt", "praesent", "semper", "feugiat", "nibh", "sed", "pulvinar", "proin", "gravida", "hendrerit", "lectus", "a", "molestie"
    ];

    /**
     * describe how the dummy text should be modified for a specific language
     */
    LoremIpsum.prototype.languages = {
        'de': {
            upperCase: 0.3, // percent of words to be upper case
            umlauts: [
                {
                    's': 'a',// s  search
                    'r': 'ä',// r = replace with
                    'p': 0.3 // p = probability (0-1)
                },
                {
                    's': 'o',
                    'r': 'ö',
                    'p': 0.3
                },
                {
                    's': 'ü',
                    'r': 'ü',
                    'p': 0.2
                },
                {
                    's': 'ss',
                    'r': 'ß',
                    'p': 0.05
                }
            ]
        },
        'fr': {
            umlauts: [
                {
                    's': 'a',
                    'r': 'à',
                    'p': 0.1
                },
                {
                    's': 'a',
                    'r': 'â',
                    'p': 0.05
                },
                {
                    's': 'e',
                    'r': 'é',
                    'p': 0.3
                },
                {
                    's': 'e',
                    'r': 'è',
                    'p': 0.1
                },
                {
                    's': 'e',
                    'r': 'ê',
                    'p': 0.05
                },
                {
                    's': 'o',
                    'r': 'ô',
                    'p': 0.05
                },
                {
                    's': 'c',
                    'r': 'ç',
                    'p': 0.2
                },
            ]
        }
    };

    /**
     * Get random number
     *
     * @param  {Number} x
     * @param  {Number} y
     * @return {Number}
     */
    LoremIpsum.prototype._random = function (x, y) {
        var rnd = (Math.random() * 2 - 1) + (Math.random() * 2 - 1) + (Math.random() * 2 - 1);
        return Math.round(Math.abs(rnd) * x + y);
    };

    /**
     * Get random number between min and max
     *
     * @param  {Number} min (optional) lower result limit
     * @param  {Number} max (optional) upper result limit
     * @return {Number}     random number
     */
    LoremIpsum.prototype._count = function (min, max) {
        var result;
        if (min && max) result = Math.floor(Math.random() * (max - min + 1) + min);
        else if (min) result = min;
        else if (max) result = max;
        else result = this._random(8, 2);

        return result;
    };


    /**
     * Gives one of . ! ?
     * . is more often returned
     * @returns {string}
     * @private
     */
    LoremIpsum.prototype._punctuation = function () {
        var puctation = ".....!?";
        return puctation.charAt(Math.floor(Math.random() * puctation.length));
    };


    /**
     * change word according to language config
     * @param {string} word
     * @returns {string}
     * @private
     */
    LoremIpsum.prototype._addUmlauts = function (word) {
        var lang = this.languages[this.language];

        if (!lang) {
            return word;
        }

        var maxUmlauts = 3;
        var addedUmlauts = 0;

        for (var i = 0; i < lang.umlauts.length; i++) {

            var umlaut = lang.umlauts[i];
            word = word.replace(new RegExp(umlaut.s, "g"), (matched, index, original) => {
                if (umlaut.p > Math.random()) {
                    addedUmlauts++;
                    return umlaut.r;
                } else {
                    return matched;
                }
            });

            if (addedUmlauts >= maxUmlauts) {
                break;
            }
        }

        if (lang.upperCase && lang.upperCase > Math.random()) {
            // uppercase first letter
            word = word.charAt(0).toUpperCase() + word.slice(1);
        }

        return word;
    };

    /**
     * Get random words
     *
     * @param  {Number} min (optional) minimal words count
     * @param  {Number} max (optional) maximal words count
     * @return {array}     array of random words
     */
    LoremIpsum.prototype.words = function (min, max) {
        var result = [];
        var count = this._count(min, max);

        // get random words
        while (result.length < count) {
            var pos = Math.floor(Math.random() * this._words.length);
            var rnd = this._words[pos];

            // do not allow same word twice in a row
            if (result.length && result[result.length - 1] === rnd) {
                continue;
            }

            rnd = this._addUmlauts(rnd);

            result.push(rnd);
        }

        return result;
    };

    /**
     * Generate sentence
     *
     * @param  {Number} min (optional) minimal words count
     * @param  {Number} max (optional) maximal words count
     * @param  {bool} appendPunctuation (optional) append punctuation on end
     * @return {array}     sentence
     */
    LoremIpsum.prototype.sentenceAsWordArray = function (min, max, appendPunctuation = true) {
        var words = this.words(min, max);

        // add comma(s) to sentence
        var index = this._random(8, 4);

        while (index < (words.length - 3)) {
            words[index] += ",";
            index += this._random(8, 4);
        }

        // append punctuation on end
        if (appendPunctuation) {
            words[words.length - 1] += this._punctuation();
        }

        // uppercase first letter
        words[0] = words[0].charAt(0).toUpperCase() + words[0].slice(1);

        return words;
    };

    /**
     * Generate sentence
     *
     * @param  {Number} min (optional) minimal words count
     * @param  {Number} max (optional) maximal words count
     * @param  {bool} appendPunctuation (optional) append punctuation on end
     * @return {String}     sentence
     */
    LoremIpsum.prototype.sentence = function (min, max, appendPunctuation = true) {
        var words = this.sentenceAsWordArray(min, max, appendPunctuation);
        return words.join(" ");
    };


    /**
     * Generate paragraph
     *
     * @param  {Number} minWords (optional) minimal words count
     * @param  {Number} maxWords (optional) maximal words count
     * @param  {Number} minParagraphs (optional) how many newlines should be inserted
     * @param  {Number} maxParagraphs (optional) how many newlines should be inserted
     * @param  {bool} html (optional) if result should be formtted with <p> tags
     * @return {String}     paragraphs
     */
    LoremIpsum.prototype.paragraph = function (minWords, maxWords, minParagraphs = 0, maxParagraphs = 0, html = false) {
        if (!minWords && !maxWords) {
            minWords = 20;
            maxWords = 60;
        }

        var paragraphs = [];
        var wordsAvailable = this._count(minWords, maxWords);

        // append sentences until limit is reached
        while (wordsAvailable > 3) {
            var maxWordsPerSentence = this._random(10, 25);
            var words = this.sentenceAsWordArray(5, Math.min(wordsAvailable, maxWordsPerSentence));
            wordsAvailable -= words.length;
            paragraphs.push(words.join(" "));
        }

        minParagraphs = Math.max(minParagraphs, 0);
        maxParagraphs = Math.max(minParagraphs, maxParagraphs);
        if (maxParagraphs) {
            var countParagraphs = this._count(minParagraphs, maxParagraphs);
            var minInsertPos = 1;
            var maxInsertPos = paragraphs.length - 1;
            for (var i = 1; i <= countParagraphs; i++) {
                var insert = this._count(minInsertPos, maxInsertPos);
                if (paragraphs[insert] === "\n" || paragraphs[insert - 1] === "\n" || paragraphs[insert + 1] === "\n") {
                    continue;
                }
                paragraphs.splice(insert, 0, "\n");
                maxInsertPos++;
            }
        }

        var result = '';
        if (html) {
            result = '<p>' +
                paragraphs.join(' ')
                    .replace(/\n\n/g, "\n")
                    .replace(/\n/g, '</p><p>')
                    .replace(/<p>\n/g, '<p>')
                + '</p>';
        } else {
            result = paragraphs.join(' ').replace(/\n /g, "\n").replace(/\n\n/g, "\n");
        }

        return result;
    };

    return LoremIpsum;

});
