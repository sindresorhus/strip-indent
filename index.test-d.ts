import {expectType} from 'tsd';
import stripIndent from './index.js';

expectType<string>(stripIndent('\tunicorn\n\t\tcake'));
