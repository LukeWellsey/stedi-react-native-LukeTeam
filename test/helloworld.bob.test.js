import sayHello from '../utils/helloworld.bob.mjs';

it("Should say Hello", ()=>{

    const hello = sayHello();
    console.log(hello);

    expect(hello).toBe("Hello");
});