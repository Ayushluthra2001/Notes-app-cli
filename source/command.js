#!/usr/bin/env node
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

yargs(hideBin(process.argv))
    .command('new <note>', 'create a new note', (yargs) => {
        return yargs.positional('note', {
            type: 'string',
            description: 'the content of the note to create'
        });
    }, (argv) => {
        console.log(argv);
    })
    .option('tags', {
        alias: 't',
        type: 'string',
        description: 'tags to add to the note'
    })
    .command('all', 'get all notes', () => {}, (argv) => {
        console.log(argv);
    })
    .command('find <filter>', 'get matching notes', (yargs) => {
        return yargs.positional('filter', {
            type: 'string',
            description: 'the search keyword to filter the notes'
        });
    }, (argv) => {
        console.log(argv);
    })
    .command('remove <id>', 'remove a note by id', (yargs) => {
        return yargs.positional('id', {
            type: 'number',
            description: 'the id of the note you want to remove'
        });
    }, (argv) => {
        console.log(argv);
    })
    .command('web [port]', 'launch website to see notes', (yargs) => {
        return yargs.positional('port', {
            type: 'number',
            description: 'port to bind on',
            default: 5000
        });
    }, (argv) => {
        console.log(argv);
    })
    .command('clean', 'remove all notes', () => {}, (argv) => {
        console.log(argv);
    })
    .demandCommand(1)
    .parse();
