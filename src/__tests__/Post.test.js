import React from 'react';
import {render} from '@testing-library/react'; 
import PostWidget from '../components/PostWidget';
import {MemoryRouter} from 'react-router-dom';
import {posts} from './__data__/testData';
import {shortenText} from '../utils/functions'

const longPost = posts[0];
const post = posts[1];

it('Renders a Post', ()=> {
  const {container} = render(
    <MemoryRouter>
      <PostWidget {...post}/>
    </MemoryRouter>,
  );
  expect(container.textContent).toContain(post.text);
});

it('Shortens text when expanded=false', ()=>{
  const {container} = render(
    <MemoryRouter>
      <PostWidget {...longPost}/>
    </MemoryRouter>,
  );
  expect(container.textContent).toContain(shortenText(longPost.text));
});

it('Displays all text when expanded=true', ()=> {
  const {container} = render(
    <MemoryRouter>
      <PostWidget expanded={true}{...longPost}/>
    </MemoryRouter>,
  );
  expect(container.textContent).toContain(longPost.text);
})