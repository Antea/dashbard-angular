'use strict';

var COMMIT_URL = "http://gitweb.antea.bogus/?p=bbox.git;a=rss;h=refs/heads/develop";
var BRANCH_URL = "http://gitweb.antea.bogus/?p=bbox.git;a=heads";
var MAX_COMMIT_COUNT = 5; //Variabile che memorizza il numero massimo di commit da stampare
var MAX_BRANCH_COUNT = 5; //Variabile che memorizza il numero massimo di branch da stampare

angular.module('yoTest1App').controller('GitController', function ($scope) {
    $scope.commits = [];
    $scope.branches = [];

    $.get(COMMIT_URL, function(data, status) { 
        if ("success" !== status) {
                return;
        }
        var commits = [];
        $(data).find("item").each(function(i) {
            if (i === MAX_COMMIT_COUNT) {
                return false;
            }
            var $this = $(this);
            commits[i] = {
                title: $this.find("title").text(),
                pubDate: new Date($this.find("pubDate").text()),
                author: $this.find("author").text().split(" <")[0]
            };
        });
        $scope.commits = commits;
    });

    $.get(BRANCH_URL, function(data, status) {
        if ("success" !== status) {
                return;
        }
        var branches = [];
        $(data).find("tr").each(function(i) {
            if (i === MAX_BRANCH_COUNT) {
                return false;
            }
            var $this = $(this);
            branches[i] = {
                name: $this.children("td:nth-of-type(2)").text(), //Seconda cella della tabella dove è scritto il nome del branch
                date: $this.children("td:nth-of-type(1)").text() //Prima cella della tabella dove è scritta la data di aggiornamento del branch
            };
        });
        $scope.branches= branches;
    });
  });


