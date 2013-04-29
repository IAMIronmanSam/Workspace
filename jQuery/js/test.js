module ("Hello jQuery")
test( "hello test", function() {
  ok( 1 == "1", "Hello Passed!" );
})

module ("OK")
test("ok", 3, function() {
  ok(true,  "passes because true is true");
  ok(1,     "passes because 1 is truthy");
  ok("",    "fails because empty string is not truthy");
});

module ("Equal")
test("equal", 3, function() {
  var actual = 5 - 4;
  equal(actual, 1,     "passes because 1 == 1");
  equal(actual, true,  "passes because 1 == true");
  equal(actual, false, "fails because 1 != false");
});

module ("Strict Equal")
test("strictEqual", 3, function() {
  var actual = 5 - 4;
  strictEqual(actual, 1,     "passes because 1 === 1");
  strictEqual(actual, true,  "fails because 1 !== true");
  strictEqual(actual, false, "fails because 1 !== false");
});

module ("Not Equal")
test("notEqual", 3, function() {
  var actual = 5 - 4;
  notEqual(actual, 0,     "passes because 1 != 0");
  notEqual(actual, false, "passes because 1 != false");
  notEqual(actual, true,  "fails because 1 == true");
});

module ("Not Strict Equal")
test("notStrictEqual", 3, function() {
  var actual = 5 - 4;
  notStrictEqual(actual, 1,     "fails because 1 === 1");
  notStrictEqual(actual, true,  "passes because 1 !== true");
  notStrictEqual(actual, false, "passes because 1 !== false");
});

module ("Deep Equal")
test("deepEqual", 7, function() {
  var actual = {a: 1};
 
  equal(    actual, {a: 1},   "fails because objects are different");
  deepEqual(actual, {a: 1},   "passes because objects are equivalent");
  deepEqual(actual, {a: "1"}, "fails because '1' !== 1");
 
  var a = $("body > *");
  var b = $("body").children();
 
  equal(    a,       b,       "fails because jQuery objects are different");
  deepEqual(a,       b,       "fails because jQuery objects are not equivalent");
  equal(    a.get(), b.get(), "fails because element arrays are different");
  deepEqual(a.get(), b.get(), "passes because element arrays are equivalent");
});

module ("Not Deep Equal")
test("notDeepEqual", 3, function() {
  var actual = {a: 1};
  notEqual(    actual, {a: 1},   "passes because objects are different");
  notDeepEqual(actual, {a: 1},   "fails because objects are equivalent");
  notDeepEqual(actual, {a: "1"}, "passes because '1' !== 1");
});

module ("Raise Throws") //Try Catch
test("raises", 3, function() {
  raises(function() {
    throw new Error("Look ma, I'm an error!");
  }, "passes because an error is thrown inside the callback");
 
  raises(function() {
    x // ReferenceError: x is not defined
  }, "passes because an error is thrown inside the callback");
 
  raises(function() {
    var a = 1;
  }, "fails because no error is thrown inside the callback");
});

module ("Automate Testing")
var counter = 0;
 
test("first test", 1, function() {
  counter++;
  equal(counter, 1, "counter should be 1");
});
 
test("second test", 1, function() {
  counter++;
  equal(counter, 2, "counter should be 2");
});
 
test("third test", 2, function() {
  counter++;
  equal(counter, 2, "counter should be 2");
  ok(false, "oops, an error");
});

/*module("jQuery#enumerate");
 
test("chainable", 1, function() {
  var items = $("#qunit-fixture li");
  strictEqual(items.enumerate(), items, "should be chaninable");
});
 
test("no args passed", 3, function() {
  var items = $("#qunit-fixture li").enumerate();
  equal(items.eq(0).text(), "0. foo", "first item should have index 1");
  equal(items.eq(1).text(), "1. bar", "second item should have index 2");
  equal(items.eq(2).text(), "2. baz", "third item should have index 3");
});
 
test("0 passed", 3, function() {
  var items = $("#qunit-fixture li").enumerate(0);
  equal(items.eq(0).text(), "0. foo", "first item should have index 0");
  equal(items.eq(1).text(), "1. bar", "second item should have index 1");
  equal(items.eq(2).text(), "2. baz", "third item should have index 2");
});
 
test("1 passed", 3, function() {
  var items = $("#qunit-fixture li").enumerate(1);
  equal(items.eq(0).text(), "1. foo", "first item should have index 1");
  equal(items.eq(1).text(), "2. bar", "second item should have index 2");
  equal(items.eq(2).text(), "3. baz", "third item should have index 3");
});
*/

module ("Addition")
test( "Addition", function() {
   var actual1 = testnamspc.add(2);
    equal(actual1, 3, "Value is correct");
   
     var actual2 = testnamspc.add(5);
    equal(actual2, 6, "Value is not correct");
})

module ("Subtraction")
test( "Subtraction", function() {
   var actual1 = testnamspc.subs(2);
    equal(actual1, 1, "Value is correct");
 
     var actual2 = testnamspc.subs(5);
    equal(actual2, 6, "Value is not correct");
  
})

module ("Multiplication")
test( "Multiplication", function() {
   var actual1 = testnamspc.multi(2);
    equal(actual1, 4, "Value is correct");

     var actual2 = testnamspc.multi(5);
    equal(actual2, 7, "Value is not correct");
  
})

module ("Division")
test( "Division", function() {
   var actual1 = testnamspc.divd(2);
    equal(actual1, 1, "Value is correct");

     var actual2 = testnamspc.divd(5);
    deepEqual(actual2, 2.5, "Value is not correct");

})
module ("DOM")
test("do some dom stuff",function() {
    var actual1 = testnamspc.dom('h1')  
    deepEqual(actual1,"hello","DOM Passed");
})
/*Need Async Testing*/
module ("DOM Style")
test("Dom style stuff",function() {
    var actual1 = testnamspc.domstyle('h1','red')  
    deepEqual(actual1,"rgb(255, 0, 0)","DOM Style Passed");
})
/*module ("Remove DOM")
test("Dom remove stuff",function() {
    var actual1 = testnamspc.domremove('h1')  
    deepEqual(actual1,1,"DOM Removal Passed");
})*/
module ("Add Class DOM")
test("Dom add Class stuff",function() {
    var actual1 = testnamspc.domclass('h1')  
    deepEqual(actual1,'testing',"DOM Class Added");
})

module("Pattern Check")
test("Pattern Test",function() {
    var actual1 = Home.Welcome('sakthi')  
    deepEqual(actual1,'sakthi',"Member Check");
})
