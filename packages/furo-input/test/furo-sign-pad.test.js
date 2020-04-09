import { fixture, html } from '@open-wc/testing';
import 'axe-core/axe.min.js';
import { axeReport } from 'pwa-helpers/axe-report.js';
import '../src/furo-catalog.js';
import '@furo/fbp/src/testhelper/test-bind.js'; // for testing with wires and hooks

describe('furo-sign-pad', () => {
  let element;
  let host;

  beforeEach(async () => {
    const testbind = await fixture(html`
      <test-bind>
        <template>
          <furo-sign-pad
            image="data:image/gif;base64,R0lGODdhEAAQAMwAAPj7+FmhUYjNfGuxYYDJdYTIeanOpT+DOTuANXi/bGOrWj6CONzv2sPjv2CmV1unU4zPgI/Sg6DJnJ3ImTh8Mtbs00aNP1CZSGy0YqLEn47RgXW8amasW7XWsmmvX2iuXiwAAAAAEAAQAAAFVyAgjmRpnihqGCkpDQPbGkNUOFk6DZqgHCNGg2T4QAQBoIiRSAwBE4VA4FACKgkB5NGReASFZEmxsQ0whPDi9BiACYQAInXhwOUtgCUQoORFCGt/g4QAIQA7"
          ></furo-sign-pad>
        </template>
      </test-bind>
    `);
    await testbind.updateComplete;
    host = testbind._host;
    [, element] = testbind.parentNode.children;
    await host.updateComplete;
    await element.updateComplete;
  });

  it('should be a furo-sign-pad', done => {
    // keep this test on top, so you can recognize a wrong asignment
    assert.equal(element.nodeName.toLowerCase(), 'furo-sign-pad');
    done();
  });

  // axeReport a11y tests
  xit('a11y', () => axeReport(element));

  it('should encode a image', done => {
    const img = element.encodeImage();
    // empty image
    assert.equal(
      img,
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAAC4CAYAAABZ/dGUAAAH6UlEQVR4Xu3bTYuWZQAF4HvUQFqIOSZlaWa2jFYtgmpRQUFQgZsoKKplf6Bo0ao/4C6IoChoUVBLo9CSpIisMGNE0/zWapeJ5JThCwmmyIgLX8653MxCh7nPdR4ON8+8zpw+c/rsuIo/S69bOnMV3+5bCRAgsGCBGYO1YCv/kACBayxwxYP18c4PJ0d+4q6Nk69uWNe4QT+eQJHAFQ3W+zveHd8c/3LC88CahyejZbCKnhZRCVxjgQUP1rmb1ReHPh0bbl8//jx1auzdt288uPbR8ex9z3uHdY1L9OMJtAgsaLDe+/btsePEV+OOdevGX/Nnxp59+8beuf1j88tb3LBanhQ5CUyBwPnBOnzy4Dh28si456Z7LzjWuZvVll82T25W8//Mjx9+3DWOHjw+GSvvsKagQUcgUCQwGaxzY/Xm95smsR/bsPH8aJ27WW0/9Pm4c/36yd/N7d4z9v988PxYGayiJ0VUAlMgMPPT7zvPvrPzjbF82fKxZNGS8d3czvH03c+N3/74dXx9dNu4be2aMX/m77Fr99wFN6v/zu6l+xS06AgESgQmN6yXPnphrLhh+Vi96ubJC/VjJ46PmcUzY+WNs2PJ2SWTsTpy4Nj45JWtF7EYrJInRUwCUyBw/h3Wix88M5Zfv2ysufWWyY1qfmZ+crzdc3vHwf2Hx2evbrvkcQ3WFLToCARKBC74LeFTbz05Vs3OjtVrVi9orLzDKnlKxCQwJQIXfazh8U2PjNmVKybH27/nwNj62vbLHtUNa0qadAwCBQKX/BzWQ6/fPxYvWnzJd1b/NzFYBU+JiASmRGBBHxy93FkN1pQ06RgECgQMVkHJIhJIEfD/AFOalINAgYDBKihZRAIpAgYrpUk5CBQIGKyCkkUkkCJgsFKalINAgYDBKihZRAIpAgYrpUk5CBQIGKyCkkUkkCJgsFKalINAgYDBKihZRAIpAgYrpUk5CBQIGKyCkkUkkCJgsFKalINAgYDBKihZRAIpAgYrpUk5CBQIGKyCkkUkkCJgsFKalINAgYDBKihZRAIpAgYrpUk5CBQIGKyCkkUkkCJgsFKalINAgYDBKihZRAIpAgYrpUk5CBQIGKyCkkUkkCJgsFKalINAgYDBKihZRAIpAgYrpUk5CBQIGKyCkkUkkCJgsFKalINAgYDBKihZRAIpAgYrpUk5CBQIGKyCkkUkkCJgsFKalINAgYDBKihZRAIpAgYrpUk5CBQIGKyCkkUkkCJgsFKalINAgYDBKihZRAIpAgYrpUk5CBQIGKyCkkUkkCJgsFKalINAgYDBKihZRAIpAgYrpUk5CBQIGKyCkkUkkCJgsFKalINAgYDBKihZRAIpAgYrpUk5CBQIGKyCkkUkkCJgsFKalINAgYDBKihZRAIpAgYrpUk5CBQIGKyCkkUkkCJgsFKalINAgYDBKihZRAIpAgYrpUk5CBQIGKyCkkUkkCJgsFKalINAgYDBKihZRAIpAgYrpUk5CBQIGKyCkkUkkCJgsFKalINAgYDBKihZRAIpAgYrpUk5CBQIGKyCkkUkkCJgsFKalINAgYDBKihZRAIpAgYrpUk5CBQIGKyCkkUkkCJgsFKalINAgYDBKihZRAIpAgYrpUk5CBQIGKyCkkUkkCJgsFKalINAgYDBKihZRAIpAgYrpUk5CBQIGKyCkkUkkCJgsFKalINAgYDBKihZRAIpAgYrpUk5CBQIGKyCkkUkkCJgsFKalINAgYDBKihZRAIpAgYrpUk5CBQIGKyCkkUkkCJgsFKalINAgYDBKihZRAIpAgYrpUk5CBQIGKyCkkUkkCJgsFKalINAgYDBKihZRAIpAgYrpUk5CBQIGKyCkkUkkCJgsFKalINAgYDBKihZRAIpAgYrpUk5CBQIGKyCkkUkkCJgsFKalINAgYDBKihZRAIpAgYrpUk5CBQIGKyCkkUkkCJgsFKalINAgYDBKihZRAIpAgYrpUk5CBQIGKyCkkUkkCJgsFKalINAgYDBKihZRAIpAgYrpUk5CBQIGKyCkkUkkCJgsFKalINAgYDBKihZRAIpAgYrpUk5CBQIGKyCkkUkkCJgsFKalINAgYDBKihZRAIpAgYrpUk5CBQIGKyCkkUkkCJgsFKalINAgYDBKihZRAIpAgYrpUk5CBQIGKyCkkUkkCJgsFKalINAgYDBKihZRAIpAgYrpUk5CBQIGKyCkkUkkCJgsFKalINAgYDBKihZRAIpAgYrpUk5CBQIGKyCkkUkkCJgsFKalINAgYDBKihZRAIpAgYrpUk5CBQIGKyCkkUkkCJgsFKalINAgYDBKihZRAIpAgYrpUk5CBQIGKyCkkUkkCJgsFKalINAgYDBKihZRAIpAgYrpUk5CBQIGKyCkkUkkCJgsFKalINAgYDBKihZRAIpAgYrpUk5CBQIGKyCkkUkkCJgsFKalINAgYDBKihZRAIpAgYrpUk5CBQIGKyCkkUkkCJgsFKalINAgYDBKihZRAIpAgYrpUk5CBQIGKyCkkUkkCJgsFKalINAgYDBKihZRAIpAgYrpUk5CBQIGKyCkkUkkCJgsFKalINAgYDBKihZRAIpAgYrpUk5CBQIGKyCkkUkkCJgsFKalINAgYDBKihZRAIpAgYrpUk5CBQIGKyCkkUkkCJgsFKalINAgYDBKihZRAIpAgYrpUk5CBQIGKyCkkUkkCLwL0eb0Lkd80iYAAAAAElFTkSuQmCC',
    );
    done();
  });
});
