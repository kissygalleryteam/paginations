KISSY.add(function (S, Node,Demo) {
    var $ = Node.all;
    describe('paginations', function () {
        it('Instantiation of components',function(){
            var demo = new Demo();
            expect(S.isObject(demo)).toBe(true);
        })
    });

},{requires:['node','kg/paginations/1.0.0/']});