# Getting up and running on a clean local checkout

tl;dr: Perform the below, or [fallback to GitHub's instructions](https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll/testing-your-github-pages-site-locally-with-jekyll).

- Install `rbenv` (e.g. using `brew`)
- Install some local version of Ruby through `rbenv`, so that Bundler can install the Gemfile dependencies without resorting to sudo (`rbenv install -l` followed by `rbenv install $SOME_VERSION_THAT_WAS_LISTED`)
- Install the dependencies (`bundle install`)
- Serve the site (`bundle exec jekyll serve`)
