import '#db';
import { User, Post } from '#models';

// // const user = {name: 'Alice', age: 25}
// // await db.collection('users').insertOne(user);

// // const user = new User({
// //   firstName: 'John',
// //   lastName: 'Doe',
// //   email: 'john@example.com',
// // });

// // const userToSave = await user.save();
// // console.log(userToSave);

// // const newUser = await User.create({
// //   firstName: 'Jane',
// //   lastName: 'Doe',
// //   email: 'jane@example.com',
// // });

// // console.log(newUser);

// // READ

// const allUsers = await User.find();
// // console.log(allUsers);

// const findJohn = await User.find({ firstName: 'Jane' });
// // console.log(findJohn);

// const findByEmail = await User.find({ email: 'jane@example.com' });
// // console.log(findByEmail);

// const findById = await User.findById('68f9de858abb10296c7bebe2');
// // console.log(findById);

// // UPDATE
// const updateJohn = await User.updateOne(
//   { email: 'john@example.com' },
//   { firstName: 'Jack' }
// );
// // console.log(updateJohn);

// const userRole = await User.updateMany({ lastName: 'Doe' }, { role: 'admin' });
// // console.log(userRole);

// const findAndUpdate = await User.findOneAndUpdate(
//   { email: 'john@example.com' },
//   { firstName: 'updated again' },
//   { new: true }
// );

// // console.log(findAndUpdate);

// const findByIdAndUpdate = await User.findByIdAndUpdate(
//   '68f9de858abb10296c7bebe2',
//   { firstName: 'John' },
//   { new: true }
// );

// // console.log(findByIdAndUpdate);

// // DELETE

// // const deleteOne = await User.deleteOne({ email: 'john@example.com' });
// // console.log(deleteOne);

// // await User.findByIdAndDelete('68f9df2502db6122da0d8666');

// const newUser = await User.create({
//   firstName: 'New',
//   lastName: 'User',
//   email: 'newuser@example.com',
// });

// const newPost = await Post.create({
//   title: 'My first post',
//   content: 'first post content...',
//   author: newUser._id,
// });

// const postWithUser = await Post.find().populate('author', 'firstName lastName');
// console.log(postWithUser);

// const orderSchema = new Schema({
//     customerName: String,
//     products: [{productName: String, quantity: Number}]
// })
