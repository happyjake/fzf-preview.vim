" using pseudo synchronous call in Vim8 because Vim8 asynchronous call is unstable
function! s:execute(command) abort
  if !has('nvim')
    call feedkeys(':' . a:command . "\n", 'n')
  else
    execute a:command
  endif
endfunction

function! fzf_preview#remote#consumer#git#add(file) abort
  call system('git add ' . shellescape(a:file))
  if v:shell_error
    echomsg 'Failed: git add ' . a:file
  endif
endfunction

function! fzf_preview#remote#consumer#git#reset(file, option) abort
  if a:option !=# ''
    let command = 'git reset ' . a:option . ' ' . shellescape(a:file)
  else
    let command = 'git reset ' . shellescape(a:file)
  endif

  call system(command)

  if v:shell_error
    echomsg 'Failed: ' . command
  endif
endfunction

function! fzf_preview#remote#consumer#git#patch(file) abort
  if exists(':Gina') == 2
    call s:execute('Gina patch ' . fnamemodify(a:file, ':p'))
    return
  elseif exists(':Git') != 0
    execute 'tabedit ' . a:file . ' | Git diff'
    return
  endif

  echoerr 'Fugitive and Gina not installed'
endfunction

function! fzf_preview#remote#consumer#git#chaperon(file) abort
  if exists(':Gina') == 2
    call s:execute('Gina chaperon ' . fnamemodify(a:file, ':p'))
    return
  endif

  echoerr 'Gina not installed'
endfunction

function! fzf_preview#remote#consumer#git#commit(option) abort
  if match(a:option, '--fixup') != -1
    echomsg system('git commit ' . a:option)
    return
  elseif exists(':Gina') == 2
    call s:execute('Gina commit --verbose ' . a:option)
    return
  elseif exists(':Git') == 2
    execute 'Git commit --verbose ' . a:option
    return
  endif

  echoerr 'Fugitive and Gina not installed'
endfunction

function! fzf_preview#remote#consumer#git#restore(file) abort
  if exists(':Gina') == 2
    call s:execute('Gina checkout -- ' . fnamemodify(a:file, ':p'))
    return
  elseif exists(':Git') == 2
    execute 'Git checkout -- ' . a:file
    return
  else
    call system('git checkout -- ' . shellescape(a:file))
    if v:shell_error
      echomsg 'Failed: git checkout -- ' . a:file
    endif
  endif
endfunction

function! fzf_preview#remote#consumer#git#switch(branch) abort
  if exists(':Gina') == 2
    call s:execute('Gina checkout ' . a:branch)
    return
  elseif exists(':Git') == 2
    execute 'Git checkout ' . a:branch
    return
  else
    call system('git checkout ' . shellescape(a:branch))
    if v:shell_error
      echomsg 'Failed: git checkout ' . a:branch
    endif
  endif
endfunction

function! fzf_preview#remote#consumer#git#create_branch() abort
  let branch_name = input('Branch name: ')
  if branch_name !=# ''
    echomsg system('git checkout -b ' . shellescape(branch_name))
  endif
endfunction

function! fzf_preview#remote#consumer#git#diff(branch, ...) abort
  let branch2 = get(a:, 1, '')

  " NOTE: Gina can not handle two branches
  if exists(':Gina') == 2
    execute 'silent Gina diff ' . a:branch . '..' . branch2
    echomsg 'git diff ' . a:branch . '..' . branch2
    return
  elseif exists(':Git') == 2
    execute 'silent Git diff ' . a:branch . '..' . branch2
    echomsg 'git diff ' . a:branch . '..' . branch2
    return
  endif

  echoerr 'Fugitive and Gina not installed'
endfunction

function! fzf_preview#remote#consumer#git#show(name_or_hash) abort
  if exists(':Gina') == 2
    call s:execute('Gina show ' . a:name_or_hash)
    return
  elseif exists(':Git') == 2
    execute 'Git show ' . a:name_or_hash
    return
  endif

  echoerr 'Fugitive and Gina not installed'
endfunction

function! fzf_preview#remote#consumer#git#merge(branch, option) abort
  if exists(':Gina') == 2
    call s:execute('Gina merge ' . a:option . ' ' . a:branch)
    return
  elseif exists(':Git') == 2
    execute 'Git merge ' . a:option . ' ' . a:branch
    return
  endif

  echoerr 'Fugitive and Gina not installed'
endfunction

function! fzf_preview#remote#consumer#git#rebase(branch) abort
  if exists(':Gina') == 2
    call s:execute('Gina rebase ' . a:branch)
    return
  elseif exists(':Git') == 2
    execute 'Git rebase ' . a:branch
    return
  endif

  echoerr 'Fugitive and Gina not installed'
endfunction

function! fzf_preview#remote#consumer#git#rebase_interactive(branch_or_hash) abort
  if exists(':Git') == 2
    execute 'Git rebase --interactive ' . a:branch_or_hash
    return
  endif

  echoerr 'Fugitive not installed'
endfunction

function! fzf_preview#remote#consumer#git#push(option) abort
  if exists(':Gina') == 2
    call s:execute('Gina push ' . a:option)
    return
  elseif exists(':Git') == 2
    execute 'Git push ' . a:option
    return
  else
    echomsg system('git push ' . a:option)
    if v:shell_error
      echomsg 'Failed: git push ' . a:option
    endif
  endif
endfunction

function! fzf_preview#remote#consumer#git#fetch() abort
  if exists(':Gina') == 2
    call s:execute('Gina fetch')
    return
  elseif exists(':Git') == 2
    execute 'Git fetch'
    return
  else
    echomsg system('git fetch')
    if v:shell_error
      echomsg 'Failed: git fetch'
    endif
  endif
endfunction

function! fzf_preview#remote#consumer#git#delete_branch(branch, option) abort
  if exists(':Gina') == 2
    call s:execute('Gina branch --delete ' . a:option . ' ' . a:branch)
    return
  elseif exists(':Git') == 2
    execute 'Git branch --delete ' . a:option . ' ' . a:branch
    return
  else
    echomsg system('git branch --delete ' . a:option . ' ' . shellescape(a:branch))
    if v:shell_error
      echomsg 'Failed: git branch --delete ' . a:option . ' ' . a:branch
    endif
  endif
endfunction

function! fzf_preview#remote#consumer#git#rename_branch(src) abort
  let dest = input('Branch name: ')
  if dest !=# ''
    let command = 'git branch -m ' . shellescape(a:src) . ' ' . dest
    echo system(command)

    if v:shell_error
      echomsg 'Failed: ' . command
    endif
  endif
endfunction

function! fzf_preview#remote#consumer#git#stash_apply(stash) abort
  let command = 'git stash apply ' . shellescape(a:stash)
  echo system(command)

  if v:shell_error
    echomsg 'Failed: ' . command
  endif
endfunction

function! fzf_preview#remote#consumer#git#stash_pop(stash) abort
  let command = 'git stash pop ' . shellescape(a:stash)
  echo system(command)

  if v:shell_error
    echomsg 'Failed: ' . command
  endif
endfunction

function! fzf_preview#remote#consumer#git#stash_drop(stash) abort
  let command = 'git stash drop ' . shellescape(a:stash)
  echo system(command)

  if v:shell_error
    echomsg 'Failed: ' . command
  endif
endfunction

function! fzf_preview#remote#consumer#git#stash_create() abort
  let message = input('Message: ')
  if  message !=# ''
    let command = 'git stash save "' . message . '"'
  else
    let command = 'git stash save'
  endif

  echo system(command)

  if v:shell_error
    echomsg 'Failed: ' . command
  endif
endfunction

function! fzf_preview#remote#consumer#git#pull() abort
  if exists(':Gina') == 2
    call s:execute('Gina pull')
    return
  elseif exists(':Git') == 2
    execute 'Git pull'
    return
  else
    echomsg system('git pull')
    if v:shell_error
      echomsg 'Failed: git pull'
    endif
  endif
endfunction

function! fzf_preview#remote#consumer#git#yank(branch) abort
  let hash = system('git rev-parse ' . shellescape(a:branch))
  call fzf_preview#remote#consumer#register#set(hash, 'v')
  echomsg 'yanked ' a:branch . ' branch hash: ' . hash
endfunction
