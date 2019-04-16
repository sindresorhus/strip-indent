import {expectType} from 'tsd';
import stripIndent = require('.');

expectType<string>(stripIndent('\tunicorn\n\t\tcake'));
