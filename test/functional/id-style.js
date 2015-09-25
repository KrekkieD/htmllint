module.exports = [
    {
        desc: 'should pass when set to false',
        input: '<div id="2fOwj_0o-3"></div>',
        opts: { 'id-style': false },
        output: 0
    }, {
        desc: 'should pass correctly styled id',
        input: '<div id="abc"></div>',
        opts: { 'id-style': 'lowercase' },
        output: 0
    }, {
        desc: 'should fail incorrectly styled id names',
        input: '<div id="foWj0wo3"></div>',
        opts: { 'id-style': 'lowercase' },
        output: 1
    }, {
        desc: 'should accept a "dash" option',
        input: '<div id="abc-def"></div>',
        opts: { 'id-style': 'dash' },
        output: 0
    }, {
        desc: 'should accept an id property that specifies multiple names',
        input: '<div id="dogecoin litecoin fedoracoin"></div>',
        opts: {'id-style': 'lowercase'},
        output: 0
    },  {
        desc: 'should accept ids that use the BEM format',
        input: '<div id="pls-no"></div><div id="pls-no__yes"></div><div id="pls-no__yes--no"></div><div id="pls-no__yes-no--maybe"></div>',
        opts: {'id-style': 'bem'},
        output: 0
    }, {
        desc: 'should ignore ids matching ignore regex',
        input: '<div id="dogecoin {{l**i(tec/oin}} fedoracoin"></div>',
        opts: {'id-style': 'lowercase', 'id-class-ignore-regex': '{{.*?}}'},
        output: 0
    }, {
        desc: 'should fail ids not matching ignore regex',
        input: '<div id="dogecoin {{l**i(tec/oin}} fe<doracoin"></div>',
        opts: {'id-style': 'lowercase', 'id-class-ignore-regex': '{{.*?}}'},
        output: 1
    }
];
