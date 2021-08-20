import { fromEvent, Observable } from "rxjs";
import { ajax } from "rxjs/ajax";
import { debounceTime, map, mergeAll, pluck } from 'rxjs/operators';
import { GithubUserListResp } from '../interfaces/github-user-list.interface';
import { GithubUser } from "../interfaces/github-user.interface";


// dom references
const body = document.querySelector('body');
const textInput = document.createElement('input');
const orderList = document.createElement('ol');
body.append(textInput, orderList);

// Helpers
const showUsers = ( users: GithubUser[] ) => {
    console.log(users);
    orderList.innerHTML = '';
    for( const user of users ) {
        const li = document.createElement('li');
        const img = document.createElement('img');
        img.src = user.avatar_url;

        const anchor = document.createElement('a');
        anchor.href = user.html_url;
        anchor.text = 'View website';
        anchor.target = '_blank';

        li.append( img );
        li.append( user.login + ' ' );
        li.append( anchor );

        orderList.append(li);

    }
}

// Streams
const input$ = fromEvent<KeyboardEvent>( textInput, 'keyup' );

input$
.pipe(
    debounceTime<KeyboardEvent>(500),
    pluck<KeyboardEvent, string>('target', 'value'),
    map<string, Observable<GithubUserListResp>>( text => ajax.getJSON(
        `https://api.github.com/search/users?q=${ text }`
    )),
    mergeAll<GithubUserListResp>(),
    pluck<GithubUserListResp, GithubUser[]>('items')
)
.subscribe( showUsers );