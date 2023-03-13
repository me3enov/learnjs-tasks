'use strict';

async function getUsers(names) {
  const jobs = [];

  for(let name of names) {
    const job = fetch(`https://api.github.com/users/${name}`).then(
        successResponse => {
          return successResponse.status != 200 ? null : successResponse.json();
        },
        failResponse => {
          return null;
        }
    );
    jobs.push(job);
  }

  const results = await Promise.all(jobs);

  return results;
}
