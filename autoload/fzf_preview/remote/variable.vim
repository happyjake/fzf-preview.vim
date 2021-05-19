function! fzf_preview#remote#variable#get_global_variables() abort
  return {
  \   'fzfPreviewDefaultFzfOptions': g:fzf_preview_default_fzf_options,
  \   'fzfPreviewUseDevIcons': g:fzf_preview_use_dev_icons,
  \   'fzfPreviewDevIconPrefixStringLength': g:fzf_preview_dev_icon_prefix_string_length,
  \   'fzfPreviewDevIconsLimit': g:fzf_preview_dev_icons_limit,
  \   'webDevIconsUnicodeDecorateFileNodesDefaultSymbol': get(g:, 'WebDevIconsUnicodeDecorateFileNodesDefaultSymbol', ''),
  \   'webDevIconsUnicodeDecorateFileNodesExtensionSymbols': get(g:, 'WebDevIconsUnicodeDecorateFileNodesExtensionSymbols', {}),
  \   'webDevIconsUnicodeDecorateFileNodesExactSymbols': get(g:, 'WebDevIconsUnicodeDecorateFileNodesExactSymbols', {}),
  \   'webDevIconsUnicodeDecorateFileNodesPatternSymbols': get(g:, 'WebDevIconsUnicodeDecorateFileNodesPatternSymbols', {}),
  \   'fzfPreviewCommand': g:fzf_preview_command,
  \   'fzfBinaryPreviewCommand': g:fzf_binary_preview_command,
  \   'fzfPreviewIfBinaryCommand': g:fzf_preview_if_binary_command,
  \   'fzfPreviewFilelistCommand': g:fzf_preview_filelist_command,
  \   'fzfPreviewGitFilesCommand': g:fzf_preview_git_files_command,
  \   'fzfPreviewDirectoryFilesCommand': g:fzf_preview_directory_files_command,
  \   'fzfPreviewGitStatusCommand': g:fzf_preview_git_status_command,
  \   'fzfPreviewGitStatusPreviewCommand': g:fzf_preview_git_status_preview_command,
  \   'fzfPreviewGrepCmd': g:fzf_preview_grep_cmd,
  \   'fzfPreviewScriptDir': g:fzf_preview_script_dir,
  \   'fzfPreviewCacheDirectory': g:fzf_preview_cache_directory,
  \   'fzfPreviewLinesCommand': g:fzf_preview_lines_command,
  \   'fzfPreviewGrepPreviewCmd': g:fzf_preview_grep_preview_cmd,
  \   'fzfPreviewCustomProcesses': g:fzf_preview_custom_processes,
  \   'fzfPreviewFzfPreviewWindowOption': g:fzf_preview_fzf_preview_window_option,
  \   'fzfPreviewPreviewKeyBindings': g:fzf_preview_preview_key_bindings,
  \   'fzfPreviewHistoryDir': g:fzf_preview_history_dir,
  \   'fzfPreviewFzfColorOption': g:fzf_preview_fzf_color_option,
  \   'fzfPreviewBuffersJump': g:fzf_preview_buffers_jump,
  \   'yankroundDir': get(g:, 'yankround_dir', ''),
  \   'fzfPreviewYankroundPreviewCommand': g:fzf_preview_yankround_preview_command,
  \   'fzfPreviewBlamePrCommand': g:fzf_preview_blame_pr_command,
  \ }
endfunction
