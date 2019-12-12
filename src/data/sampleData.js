export default {
  title: 'The fat rabbit',
  video: {
    src: './SampleVideo_720x480_5mb.mp4',
    duration: 30,
  },
  markers: [{
    title: 'How to be happy',
    timestamp: 0,
    content: `
      <h1>This video will cheer you up in no time!</h1>
      <p>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
        sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
        sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
      </p>
      <code><pre>import { flow, keys, pickBy } from 'lodash/fp';
import { executeIfFunction } from './executeIfFunction';

export const fillArrayConditionally =
  (conditions: IFillArrayConditionallyParams): IFillArrayConditionallyReturnValue =>
    (valueContainer): any[] =>
      flow(
        pickBy(condition => executeIfFunction(condition, valueContainer)),
        keys,
      )(conditions);
</pre></code>
      <p>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
        sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
        sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
        Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
        consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
        sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
        Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
        sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
        sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
      </p>
      <code><pre>import { executeIfFunction } from '../helper/executeIfFunction';

export const reduce = cases => state => action => key =>
  executeIfFunction(
    key in cases ? cases[key] : state,
    state,
    action,
  );
</pre></code>
      <p>
        sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
        Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
        sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
        sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
        Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
        consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
        sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
        Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
      </p>
    `,
  }, {
    title: 'Maker 2 title',
    timestamp: 20,
    content: '<h1>headline 2</h1><p>Some more content</p>',
  }],
}
