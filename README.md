#gin

gin is a command line tool that makes creating new files for a project easier. 

## Installation

If you have ssh keys setup on your machine and GitHub, it's as simple as running

    $ npm install andrewholsted/gin -g;

If you don't have ssh set up, take 5 minutes and [set it up](https://help.github.com/articles/generating-ssh-keys/). You should.


## Usage

#### Creating a Page

	gin page <page_name>

It's ok to use spaces in the page name. The generator will convert it to the proper case. The following files will be generated

	core/client/app/pages/page-name.js (populated with a stub controller)
	core/client/app/pages/page-name.styl
	core/client/app/pages/page-name.jade

#### Creating a Directive

	gin directive <directive_name>

The following files will be created

	core/client/app/components/directive-name.js 
	core/client/app/components/directive-name.styl
	core/client/app/components/directive-name.jade

#### Help
Run `--help` at any time to see available methods and parameters













