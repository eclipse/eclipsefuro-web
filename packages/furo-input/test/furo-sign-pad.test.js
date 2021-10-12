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
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAAC4CAYAAABZ/dGUAAAAAXNSR0IArs4c6QAAB+lJREFUeF7t202LlmUABeB71EBaiDkmZWlmtoxWLYJqUUFBUIGbKCiqZX+gaNGqP+AuiKAoaFFQS6PQkqSIrDBjRNP81mqXieSU4QsJpsiIC1/OudzMQoe5z3UeDjfPvM6cPnP67LiKP0uvWzpzFd/uWwkQILBggRmDtWAr/5AAgWsscMWD9fHODydHfuKujZOvbljXuEE/nkCRwBUN1vs73h3fHP9ywvPAmocno2Wwip4WUQlcY4EFD9a5m9UXhz4dG25fP/48dWrs3bdvPLj20fHsfc97h3WNS/TjCbQILGiw3vv27bHjxFfjjnXrxl/zZ8aeffvG3rn9Y/PLW9ywWp4UOQlMgcD5wTp88uA4dvLIuOemey841rmb1ZZfNk9uVvP/zI8fftw1jh48Phkr77CmoEFHIFAkMBmsc2P15vebJrEf27Dx/Gidu1ltP/T5uHP9+snfze3eM/b/fPD8WBmsoidFVAJTIDDz0+87z76z842xfNnysWTRkvHd3M7x9N3Pjd/++HV8fXTbuG3tmjF/5u+xa/fcBTer/87upfsUtOgIBEoEJjeslz56Yay4YflYvermyQv1YyeOj5nFM2PljbNjydklk7E6cuDY+OSVrRexGKySJ0VMAlMgcP4d1osfPDOWX79srLn1lsmNan5mfnK83XN7x8H9h8dnr2675HEN1hS06AgESgQu+C3hU289OVbNzo7Va1YvaKy8wyp5SsQkMCUCF32s4fFNj4zZlSsmx9u/58DY+tr2yx7VDWtKmnQMAgUCl/wc1kOv3z8WL1p8yXdW/zcxWAVPiYgEpkRgQR8cvdxZDdaUNOkYBAoEDFZBySISSBHw/wBTmpSDQIGAwSooWUQCKQIGK6VJOQgUCBisgpJFJJAiYLBSmpSDQIGAwSooWUQCKQIGK6VJOQgUCBisgpJFJJAiYLBSmpSDQIGAwSooWUQCKQIGK6VJOQgUCBisgpJFJJAiYLBSmpSDQIGAwSooWUQCKQIGK6VJOQgUCBisgpJFJJAiYLBSmpSDQIGAwSooWUQCKQIGK6VJOQgUCBisgpJFJJAiYLBSmpSDQIGAwSooWUQCKQIGK6VJOQgUCBisgpJFJJAiYLBSmpSDQIGAwSooWUQCKQIGK6VJOQgUCBisgpJFJJAiYLBSmpSDQIGAwSooWUQCKQIGK6VJOQgUCBisgpJFJJAiYLBSmpSDQIGAwSooWUQCKQIGK6VJOQgUCBisgpJFJJAiYLBSmpSDQIGAwSooWUQCKQIGK6VJOQgUCBisgpJFJJAiYLBSmpSDQIGAwSooWUQCKQIGK6VJOQgUCBisgpJFJJAiYLBSmpSDQIGAwSooWUQCKQIGK6VJOQgUCBisgpJFJJAiYLBSmpSDQIGAwSooWUQCKQIGK6VJOQgUCBisgpJFJJAiYLBSmpSDQIGAwSooWUQCKQIGK6VJOQgUCBisgpJFJJAiYLBSmpSDQIGAwSooWUQCKQIGK6VJOQgUCBisgpJFJJAiYLBSmpSDQIGAwSooWUQCKQIGK6VJOQgUCBisgpJFJJAiYLBSmpSDQIGAwSooWUQCKQIGK6VJOQgUCBisgpJFJJAiYLBSmpSDQIGAwSooWUQCKQIGK6VJOQgUCBisgpJFJJAiYLBSmpSDQIGAwSooWUQCKQIGK6VJOQgUCBisgpJFJJAiYLBSmpSDQIGAwSooWUQCKQIGK6VJOQgUCBisgpJFJJAiYLBSmpSDQIGAwSooWUQCKQIGK6VJOQgUCBisgpJFJJAiYLBSmpSDQIGAwSooWUQCKQIGK6VJOQgUCBisgpJFJJAiYLBSmpSDQIGAwSooWUQCKQIGK6VJOQgUCBisgpJFJJAiYLBSmpSDQIGAwSooWUQCKQIGK6VJOQgUCBisgpJFJJAiYLBSmpSDQIGAwSooWUQCKQIGK6VJOQgUCBisgpJFJJAiYLBSmpSDQIGAwSooWUQCKQIGK6VJOQgUCBisgpJFJJAiYLBSmpSDQIGAwSooWUQCKQIGK6VJOQgUCBisgpJFJJAiYLBSmpSDQIGAwSooWUQCKQIGK6VJOQgUCBisgpJFJJAiYLBSmpSDQIGAwSooWUQCKQIGK6VJOQgUCBisgpJFJJAiYLBSmpSDQIGAwSooWUQCKQIGK6VJOQgUCBisgpJFJJAiYLBSmpSDQIGAwSooWUQCKQIGK6VJOQgUCBisgpJFJJAiYLBSmpSDQIGAwSooWUQCKQIGK6VJOQgUCBisgpJFJJAiYLBSmpSDQIGAwSooWUQCKQIGK6VJOQgUCBisgpJFJJAiYLBSmpSDQIGAwSooWUQCKQIGK6VJOQgUCBisgpJFJJAiYLBSmpSDQIGAwSooWUQCKQIGK6VJOQgUCBisgpJFJJAiYLBSmpSDQIGAwSooWUQCKQIGK6VJOQgUCBisgpJFJJAiYLBSmpSDQIGAwSooWUQCKQIGK6VJOQgUCBisgpJFJJAiYLBSmpSDQIGAwSooWUQCKQIGK6VJOQgUCBisgpJFJJAiYLBSmpSDQIGAwSooWUQCKQIGK6VJOQgUCBisgpJFJJAiYLBSmpSDQIGAwSooWUQCKQIGK6VJOQgUCBisgpJFJJAiYLBSmpSDQIGAwSooWUQCKQIGK6VJOQgUCBisgpJFJJAiYLBSmpSDQIGAwSooWUQCKQIGK6VJOQgUCBisgpJFJJAi8C9Hm9C5HfNImAAAAABJRU5ErkJggg==',
    );
    done();
  });
});
