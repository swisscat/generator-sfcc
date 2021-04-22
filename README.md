# Salesforce Commerce Cloud Generator

[![Version](https://img.shields.io/npm/v/generator-sfcc.svg)](https://npmjs.org/package/generator-sfcc)
[![Build Status](https://img.shields.io/travis/swisscat/generator-sfcc/master.svg)](https://travis-ci.org/sfcc/generator-sfcc)
[![codecov](https://codecov.io/gh/swisscat/generator-sfcc/branch/master/graph/badge.svg)](https://codecov.io/gh/swisscat/generator-sfcc)

A [Yeoman](https://yeoman.io) generator to create Saleforce Commerce Cloud components.

## Installation

Install `yo` and this module globally.

```bash
npm install -g yo generator-sfcc
```

## Creating a Cartridge

Navigate to the directory you'd like to use for your project, then run yo cartridge-lib-module.

```bash
$ mkdir app_custom_myproject
$ cd app_custom_myproject
$ yo sfcc:cartridge app_custom_myproject
```

## Creating a Metadata Repository

```bash
$ mkdir metadata
$ cd metadata
$ yo sfcc:metadata metadata
```

## Creating a Commerce Cloud full project

```bash
$ mkdir myproject
$ cd myproject
$ yo sfcc:project myproject
```
