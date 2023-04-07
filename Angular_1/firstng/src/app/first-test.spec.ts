describe('first test',()=>{
    let data: any ;
    let a: number;
    let b: number;
    let str:string;

    beforeEach(()=>{
        console.log('from before');
        data = {};
    });


    xit('x test',()=>{ //temporary suspending the test, i.e.disabling to concentrate on other tests

    });

    it('fail test',()=>{//explicitly failing test
        fail();
    });

    it('dummy test',()=>{
        pending();
    });

it('it should add(10,10) and give 20',
    ()=>{
        //var a=20;
        a=10;
        b=10;
        expect(a+b).toBe(20);
    
});

it('it should return true if the flag is true',()=>{
    data.flag=false;
    data.flag=true;
    expect(data.flag).toBe(true);
});
});