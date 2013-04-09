module ("Hello jQuery")
test( "hello test", function() {
  ok( 1 == "1", "Passed!" );
  console.log("Hello Qunit")
})

module ("Addition")
test( "Addition", function() {
   var actual1 = add(2);
    equal(actual1, 3, "Value is correct");
    console.log("Addition is True");

     var actual2 = add(5);
    equal(actual2, 6, "Value is not correct");
    console.log("Addition is False")
})

module ("Subtraction")
test( "Subtraction", function() {
   var actual1 = subs(2);
    equal(actual1, 1, "Value is correct");
    console.log("Subtraction is True");

     var actual2 = subs(5);
    equal(actual2, 6, "Value is not correct");
    console.log("Subtraction is False")
})

module ("Multiplication")
test( "Multiplication", function() {
   var actual1 = multi(2);
    equal(actual1, 4, "Value is correct");
    console.log("Multiplication is True");

     var actual2 = add(5);
    equal(actual2, 7, "Value is not correct");
    console.log("Multiplication is False")
})

module ("Division")
test( "Division", function() {
   var actual1 = divd(2);
    equal(actual1, 1, "Value is correct");
    console.log("Division is True");

     var actual2 = divd(5);
    deepEqual(actual2, 2.5, "Value is not correct");
    console.log("Division is False")
})
