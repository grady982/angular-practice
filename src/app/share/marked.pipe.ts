import { Pipe, PipeTransform } from '@angular/core';
import * as marked from 'marked';
import * as hljs from 'highlight.js';

@Pipe({
  name: 'marked'
})
export class MarkedPipe implements PipeTransform {
  transform(value: any, ...args: unknown[]): any {
    if (value && value.length) {
      marked.setOptions({
        renderer: new marked.Renderer(),
        highlight: (code, language) => {
          const validLanguage = hljs.getLanguage(language) ? language : 'plaintext';
          return hljs.highlight(validLanguage, code).value;
        },
        pedantic: false,
        gfm: true,
        breaks: false,
        sanitize: false,
        smartLists: true,
        smartypants: false,
        xhtml: false
      });
      console.log('compile');
      return marked(value);
    }
    console.log('not compile');
    return value;
  }
}
