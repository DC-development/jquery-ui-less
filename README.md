# JQuery-UI LESS adapter for TWBS 3

## v0.1.4

Have consistent (themeable) styles
from TWBS with jQuery UI components. 

This project contains a functional [demo](http://dc-development.github.io/jquery-ui-less/) with generated themes.

Just clone this repo anywhere to your machine and browse the demo folder, to see how its used.
If you want to use it standalone make sure you also clone twbs.

Goal for this branch is to make all jQUeryUI widgets use glyphicons and follow, whatever bootstrap theme used, in your project.

## Example usage:

```

@import "../bootstrap/less/bootstrap";
@import "../less/jquery.ui.less";

@import "themes/variables_cerulean";
@import "themes/bootswatch_cerulean";

@import "demovars.less";

```

The demo only contains generated css (beside the demo-less files).
The themes are downloaded here: http://bootswatch.com/yeti/. 

-----------

the translation of the bootstrap vars should be done in jquery.ui.variables.less 


## Contribution

For build demo `demo.css` you chould exec.

    bower install
    npm install
    grunt watch