Contributing
Want to contribute to Eclipse Furo Web? Great!

We are more than happy to accept external contributions to the project in the form of bug reports and pull requests.

Initial setup
Fork the project on github and pull down your copy.
Commit your code and make a pull request.
That's it for the one time setup. Now you're ready to make a change.

Submitting a pull request
We iterate fast! To avoid potential merge conflicts, it's a good idea to pull from the main project before making a change and submitting a pull request. The easiest way to do this is setup a remote called upstream and do a pull before working on a change:

git remote add upstream git://github.com/eclipse/eclipsefuro-web.git
Then before making a change, do a pull from the upstream main branch:

git pull upstream master
To make life easier, add a "pull upstream" alias in your .gitconfig:

git checkout master
git pu
# make change
git commit -a -m 'Awesome things.'
git push
Lastly, don't forget to submit the pull request.
