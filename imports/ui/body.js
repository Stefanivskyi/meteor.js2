import { Template } from 'meteor/templating';

import { Posts } from '../api/posts.js';

import './body.html';

Template.body.helpers({
  posts() {
    return Posts.find({}, { sort: { createdAt: -1 } });
  },
});

Template.body.events({
  'submit .new-post'(event) {
    // Prevent default browser form submit
    event.preventDefault();

const target = event.target;
const text = target.text.value;
const text2 = target.text2.value;
const text3 = target.text3.value;
const text4 = target.text4.value;
const text5 = target.text5.value;

Posts.insert({ 
text, text2, text3, text4, text5, 
createdAt: new Date(),
owner: Meteor.userId(),
username: Meteor.user().username
});
target.text.value = '';
target.text2.value = '';
target.text3.value = '';
target.text4.value = '';
target.text5.value = '';
  },
});