const UserController = require("./user-controller");
const User = require("./user");

const userController = new UserController();

test('add user to userController', () => {    
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);    
    expect(userController.getUsers()).toContain(user);
  });

test('remove user to userController', () => {    
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);    
    userController.remove(user);
    expect(userController.users).not.toContain(user);
  });

test('user is not a user', () => {    
    let user = new User(1235,"Hector", "hector@generation.org");
    //userController.add(user);    
    expect(userController.getUsers()).not.toContain(user);
  });

test ('remove user is not a user', () => {
  let user = new User(1235,"Hector", "hector@generation.org");
  expect(userController.getUsers()).not.toContain(user);
  userController.add(user);
  expect(userController.getUsers()).toContain(user);
  });

test ('find by email', () => {
  
})