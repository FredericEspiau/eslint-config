# @espiau/eslint-config

A configuration that gathers some plugins and configurations that are still updated regularly.

## Requirements

- TypeScript >= 5

## Installation

```bash
npm install --save-dev \
    @eslint-community/eslint-plugin-eslint-comments \
    @espiau/eslint-config \
    @shopify/eslint-plugin \
    @typescript-eslint/eslint-plugin \
    eslint \
    eslint-plugin-array-func \
    eslint-plugin-etc \
    eslint-plugin-functional \
    eslint-plugin-import \
    eslint-plugin-n \
    eslint-plugin-perfectionist \
    eslint-plugin-promise \
    eslint-plugin-regexp \
    eslint-plugin-security \
    eslint-plugin-sonar \
    eslint-plugin-sonarjs \
    eslint-plugin-total-functions \
    eslint-plugin-unicorn
```

## Usage

In your `.eslintrc.json`:

```json
{
    "extends": ["@espiau/eslint-config"]
}
```