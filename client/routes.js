import { Router } from 'meteor/iron:router';

Router.configure({
    layoutTemplate: "appLayout"
});

Router.route('/', function(){
    this.render("playground1", {to: "main"})
});

Router.route('/hu', function(){
    this.render("playground", {to: "main"})
});

Router.route('/en', function(){
    this.render("playground2", {to: "main"})
});


