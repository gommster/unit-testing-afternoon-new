import {shortenText} from '../../src/utils/functions';
import {wordCount, attachUserName} from '../../server/utils';
import {shortText, longText, posts, users} from './__data__/testData';

test ('shortenText should not alter a string with less than 100 characters', () => {
  expect(shortenText(shortText)).toHaveLength(29);
});

test('shortenText should cut off any character longer than 100 characters and add 3 periods', () =>{
  const shortened = shortenText(longText);
  expect(shortened).not.toHaveLength(longText.length);
  expect(shortened.slice(-3)).toBe('...');
})

test('wordCount should return 233 for this test', () => {
  expect(wordCount(posts)).toBe(233);
})

test('attachUserName should remove any post without a user', () => {
  expect(attachUserName(users, posts)).not.toContainEqual(posts[5]);
})

test('attachUserName should correctly attach the users\' full name', ()=>{
  expect(attachUserName(users, posts)[0]).toHaveProperty('displayName');
})

