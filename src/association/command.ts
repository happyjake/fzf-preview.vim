import { parseDictionaryFilesArgs, parseEmptySourceFuncArgs, parseGrepArgs } from "@/args"
import { parseResources } from "@/args/files-from-resources-parser"
import {
  allBuffers,
  allBuffersDefaultOptions,
  blamePr,
  blamePrDefaultOptions,
  bookmarks,
  bookmarksDefaultOptions,
  bufferLines,
  bufferLinesDefaultOptions,
  buffers,
  buffersDefaultOptions,
  bufferTags,
  bufferTagsDefaultOptions,
  changes,
  changesDefaultOptions,
  commandPalette,
  commandPaletteDefaultOptions,
  ctags,
  ctagsDefaultOptions,
  directoryFiles,
  directoryFilesDefaultOptions,
  filesFromResources,
  filesFromResourcesDefaultOptions,
  gitActions,
  gitActionsDefaultOptions,
  gitBranchActions,
  gitBranchActionsDefaultOptions,
  gitBranches,
  gitBranchesDefaultOptions,
  gitCurrentLogs,
  gitCurrentLogsDefaultOptions,
  gitFiles,
  gitFilesDefaultOptions,
  gitLogActions,
  gitLogActionsDefaultOptions,
  gitLogs,
  gitLogsDefaultOptions,
  gitReflogActions,
  gitReflogActionsDefaultOptions,
  gitReflogs,
  gitReflogsDefaultOptions,
  gitStashActions,
  gitStashActionsDefaultOptions,
  gitStashes,
  gitStashesDefaultOptions,
  gitStatus,
  gitStatusActions,
  gitStatusActionsDefaultOptions,
  gitStatusDefaultOptions,
  jumps,
  jumpsDefaultOptions,
  lines,
  linesDefaultOptions,
  locationList,
  locationListDefaultOptions,
  marks,
  marksDefaultOptions,
  memoList,
  memoListDefaultOptions,
  memoListGrep,
  memoListGrepDefaultOptions,
  mruFiles,
  mruFilesDefaultOptions,
  mrwFiles,
  mrwFilesDefaultOptions,
  oldFiles,
  oldFilesDefaultOptions,
  projectFiles,
  projectFilesDefaultOptions,
  projectGrep,
  projectGrepDefaultOptions,
  projectMruFiles,
  projectMruFilesDefaultOptions,
  projectMrwFiles,
  projectMrwFilesDefaultOptions,
  projectOldFiles,
  projectOldFilesDefaultOptions,
  quickFix,
  quickFixDefaultOptions,
  vistaBufferCtags,
  vistaBufferCtagsDefaultOptions,
  vistaCtags,
  vistaCtagsDefaultOptions,
  yankround,
  yankroundDefaultOptions,
} from "@/fzf/resource"
import { todoComments, todoCommentsDefaultOptions } from "@/fzf/resource/todo-comments"
import { grepHelp, grepHelpDefaultOptions } from "@/fzf/resource/vim-help"
import {
  vimLspCurrentDiagnostics,
  vimLspCurrentDiagnosticsDefaultOptions,
} from "@/fzf/resource/vim-lsp-current-diagnostics"
import { vimLspDiagnostics, vimLspDiagnosticsDefaultOptions } from "@/fzf/resource/vim-lsp-diagnostics"
import { vimLspImplementation, vimLspImplementationDefaultOptions } from "@/fzf/resource/vim-lsp-implementation"
import { vimLspReferences, vimLspReferencesDefaultOptions } from "@/fzf/resource/vim-lsp-references"
import { vimLspTypeDefinition, vimLspTypeDefinitionDefaultOptions } from "@/fzf/resource/vim-lsp-type-definition"
import type { BaseFzfCommand } from "@/type"

export const vimCommandOptions = {
  nargs: "?",
  sync: true,
} as const

export const commandDefinition: ReadonlyArray<BaseFzfCommand> = [
  {
    commandName: "FzfPreviewProjectFiles",
    sourceFunc: projectFiles,
    sourceFuncArgsParser: parseEmptySourceFuncArgs,
    vimCommandOptions,
    defaultFzfOptionFunc: projectFilesDefaultOptions,
    defaultProcessesName: "open-file",
    enableConvertForFzf: true,
    enableDevIcons: true,
  },
  {
    commandName: "FzfPreviewGitFiles",
    sourceFunc: gitFiles,
    sourceFuncArgsParser: parseEmptySourceFuncArgs,
    vimCommandOptions,
    defaultFzfOptionFunc: gitFilesDefaultOptions,
    defaultProcessesName: "open-file",
    enableConvertForFzf: true,
    enableDevIcons: true,
  },
  {
    commandName: "FzfPreviewDirectoryFiles",
    sourceFunc: directoryFiles,
    sourceFuncArgsParser: parseDictionaryFilesArgs,
    vimCommandOptions,
    defaultFzfOptionFunc: directoryFilesDefaultOptions,
    defaultProcessesName: "open-file",
    enableConvertForFzf: true,
    enableDevIcons: true,
  },
  {
    commandName: "FzfPreviewBuffers",
    sourceFunc: buffers,
    sourceFuncArgsParser: parseEmptySourceFuncArgs,
    vimCommandOptions,
    defaultFzfOptionFunc: buffersDefaultOptions,
    defaultProcessesName: "open-buffer",
    enableConvertForFzf: true,
    enableDevIcons: false,
  },
  {
    commandName: "FzfPreviewAllBuffers",
    sourceFunc: allBuffers,
    sourceFuncArgsParser: parseEmptySourceFuncArgs,
    vimCommandOptions,
    defaultFzfOptionFunc: allBuffersDefaultOptions,
    defaultProcessesName: "open-bufnr",
    enableConvertForFzf: true,
    enableDevIcons: false,
  },
  {
    commandName: "FzfPreviewProjectOldFiles",
    sourceFunc: projectOldFiles,
    sourceFuncArgsParser: parseEmptySourceFuncArgs,
    vimCommandOptions,
    defaultFzfOptionFunc: projectOldFilesDefaultOptions,
    defaultProcessesName: "open-file",
    enableConvertForFzf: true,
    enableDevIcons: true,
  },
  {
    commandName: "FzfPreviewProjectMruFiles",
    sourceFunc: projectMruFiles,
    sourceFuncArgsParser: parseEmptySourceFuncArgs,
    vimCommandOptions,
    defaultFzfOptionFunc: projectMruFilesDefaultOptions,
    defaultProcessesName: "open-file",
    enableConvertForFzf: true,
    enableDevIcons: true,
  },
  {
    commandName: "FzfPreviewProjectMrwFiles",
    sourceFunc: projectMrwFiles,
    sourceFuncArgsParser: parseEmptySourceFuncArgs,
    vimCommandOptions,
    defaultFzfOptionFunc: projectMrwFilesDefaultOptions,
    defaultProcessesName: "open-file",
    enableConvertForFzf: true,
    enableDevIcons: true,
  },
  {
    commandName: "FzfPreviewLines",
    sourceFunc: lines,
    sourceFuncArgsParser: parseEmptySourceFuncArgs,
    vimCommandOptions,
    defaultFzfOptionFunc: linesDefaultOptions,
    defaultProcessesName: "open-file",
    enableConvertForFzf: false,
    enableDevIcons: false,
  },
  {
    commandName: "FzfPreviewBufferLines",
    sourceFunc: bufferLines,
    sourceFuncArgsParser: parseEmptySourceFuncArgs,
    vimCommandOptions,
    defaultFzfOptionFunc: bufferLinesDefaultOptions,
    defaultProcessesName: "open-file",
    enableConvertForFzf: true,
    enableDevIcons: true,
  },
  {
    commandName: "FzfPreviewCtags",
    sourceFunc: ctags,
    sourceFuncArgsParser: parseEmptySourceFuncArgs,
    vimCommandOptions,
    defaultFzfOptionFunc: ctagsDefaultOptions,
    defaultProcessesName: "open-file",
    enableConvertForFzf: false,
    enableDevIcons: false,
  },
  {
    commandName: "FzfPreviewBufferTags",
    sourceFunc: bufferTags,
    sourceFuncArgsParser: parseEmptySourceFuncArgs,
    vimCommandOptions,
    defaultFzfOptionFunc: bufferTagsDefaultOptions,
    defaultProcessesName: "open-file",
    enableConvertForFzf: false,
    enableDevIcons: false,
  },
  {
    commandName: "FzfPreviewOldFiles",
    sourceFunc: oldFiles,
    sourceFuncArgsParser: parseEmptySourceFuncArgs,
    vimCommandOptions,
    defaultFzfOptionFunc: oldFilesDefaultOptions,
    defaultProcessesName: "open-file",
    enableConvertForFzf: true,
    enableDevIcons: true,
  },
  {
    commandName: "FzfPreviewMruFiles",
    sourceFunc: mruFiles,
    sourceFuncArgsParser: parseEmptySourceFuncArgs,
    vimCommandOptions,
    defaultFzfOptionFunc: mruFilesDefaultOptions,
    defaultProcessesName: "open-file",
    enableConvertForFzf: true,
    enableDevIcons: true,
  },
  {
    commandName: "FzfPreviewMrwFiles",
    sourceFunc: mrwFiles,
    sourceFuncArgsParser: parseEmptySourceFuncArgs,
    vimCommandOptions,
    defaultFzfOptionFunc: mrwFilesDefaultOptions,
    defaultProcessesName: "open-file",
    enableConvertForFzf: true,
    enableDevIcons: true,
  },
  {
    commandName: "FzfPreviewQuickFix",
    sourceFunc: quickFix,
    sourceFuncArgsParser: parseEmptySourceFuncArgs,
    vimCommandOptions,
    defaultFzfOptionFunc: quickFixDefaultOptions,
    defaultProcessesName: "open-file",
    enableConvertForFzf: true,
    enableDevIcons: true,
  },
  {
    commandName: "FzfPreviewLocationList",
    sourceFunc: locationList,
    sourceFuncArgsParser: parseEmptySourceFuncArgs,
    vimCommandOptions,
    defaultFzfOptionFunc: locationListDefaultOptions,
    defaultProcessesName: "open-file",
    enableConvertForFzf: true,
    enableDevIcons: true,
  },
  {
    commandName: "FzfPreviewJumps",
    sourceFunc: jumps,
    sourceFuncArgsParser: parseEmptySourceFuncArgs,
    vimCommandOptions,
    defaultFzfOptionFunc: jumpsDefaultOptions,
    defaultProcessesName: "open-file",
    enableConvertForFzf: true,
    enableDevIcons: true,
  },
  {
    commandName: "FzfPreviewChanges",
    sourceFunc: changes,
    sourceFuncArgsParser: parseEmptySourceFuncArgs,
    vimCommandOptions,
    defaultFzfOptionFunc: changesDefaultOptions,
    defaultProcessesName: "open-file",
    enableConvertForFzf: false,
    enableDevIcons: false,
  },
  {
    commandName: "FzfPreviewMarks",
    sourceFunc: marks,
    sourceFuncArgsParser: parseEmptySourceFuncArgs,
    vimCommandOptions,
    defaultFzfOptionFunc: marksDefaultOptions,
    defaultProcessesName: "open-file",
    enableConvertForFzf: true,
    enableDevIcons: true,
  },
  {
    commandName: "FzfPreviewProjectGrep",
    sourceFunc: projectGrep,
    sourceFuncArgsParser: parseGrepArgs,
    vimCommandOptions,
    defaultFzfOptionFunc: projectGrepDefaultOptions,
    defaultProcessesName: "open-file",
    enableConvertForFzf: true,
    enableDevIcons: true,
  },
  {
    commandName: "FzfPreviewProjectGrepRecall",
    sourceFunc: projectGrep,
    sourceFuncArgsParser: parseGrepArgs,
    vimCommandOptions,
    defaultFzfOptionFunc: projectGrepDefaultOptions,
    defaultProcessesName: "open-file",
    enableConvertForFzf: true,
    enableDevIcons: true,
  },
  {
    commandName: "FzfPreviewFromResources",
    sourceFunc: filesFromResources,
    sourceFuncArgsParser: parseResources,
    vimCommandOptions,
    defaultFzfOptionFunc: filesFromResourcesDefaultOptions,
    defaultProcessesName: "open-file",
    enableConvertForFzf: true,
    enableDevIcons: true,
  },
  {
    commandName: "FzfPreviewCommandPalette",
    sourceFunc: commandPalette,
    sourceFuncArgsParser: parseEmptySourceFuncArgs,
    vimCommandOptions,
    defaultFzfOptionFunc: commandPaletteDefaultOptions,
    defaultProcessesName: "command-palette",
    enableConvertForFzf: false,
    enableDevIcons: false,
  },
  {
    commandName: "FzfPreviewGrepHelp",
    sourceFunc: grepHelp,
    sourceFuncArgsParser: parseGrepArgs,
    vimCommandOptions,
    defaultFzfOptionFunc: grepHelpDefaultOptions,
    defaultProcessesName: "open-file",
    enableConvertForFzf: true,
    enableDevIcons: false,
  },
  {
    commandName: "FzfPreviewGitActions",
    sourceFunc: gitActions,
    sourceFuncArgsParser: parseEmptySourceFuncArgs,
    vimCommandOptions,
    defaultFzfOptionFunc: gitActionsDefaultOptions,
    defaultProcessesName: "git-action",
    enableConvertForFzf: false,
    enableDevIcons: false,
  },
  {
    commandName: "FzfPreviewGitStatus",
    sourceFunc: gitStatus,
    sourceFuncArgsParser: parseEmptySourceFuncArgs,
    vimCommandOptions,
    defaultFzfOptionFunc: gitStatusDefaultOptions,
    defaultProcessesName: "git-status",
    enableConvertForFzf: true,
    enableDevIcons: false,
  },
  {
    commandName: "FzfPreviewGitStatusActions",
    sourceFunc: gitStatusActions,
    sourceFuncArgsParser: parseEmptySourceFuncArgs,
    vimCommandOptions,
    defaultFzfOptionFunc: gitStatusActionsDefaultOptions,
    defaultProcessesName: "git-status-actions",
    enableConvertForFzf: false,
    enableDevIcons: false,
  },
  {
    commandName: "FzfPreviewGitBranches",
    sourceFunc: gitBranches,
    sourceFuncArgsParser: parseEmptySourceFuncArgs,
    vimCommandOptions,
    defaultFzfOptionFunc: gitBranchesDefaultOptions,
    defaultProcessesName: "git-branch",
    enableConvertForFzf: false,
    enableDevIcons: false,
  },
  {
    commandName: "FzfPreviewGitBranchActions",
    sourceFunc: gitBranchActions,
    sourceFuncArgsParser: parseEmptySourceFuncArgs,
    vimCommandOptions,
    defaultFzfOptionFunc: gitBranchActionsDefaultOptions,
    defaultProcessesName: "git-branch-actions",
    enableConvertForFzf: false,
    enableDevIcons: false,
  },
  {
    commandName: "FzfPreviewGitLogs",
    sourceFunc: gitLogs,
    sourceFuncArgsParser: parseEmptySourceFuncArgs,
    vimCommandOptions,
    defaultFzfOptionFunc: gitLogsDefaultOptions,
    defaultProcessesName: "git-log",
    enableConvertForFzf: false,
    enableDevIcons: false,
  },
  {
    commandName: "FzfPreviewGitCurrentLogs",
    sourceFunc: gitCurrentLogs,
    sourceFuncArgsParser: parseEmptySourceFuncArgs,
    vimCommandOptions,
    defaultFzfOptionFunc: gitCurrentLogsDefaultOptions,
    defaultProcessesName: "git-log",
    enableConvertForFzf: false,
    enableDevIcons: false,
  },
  {
    commandName: "FzfPreviewGitLogActions",
    sourceFunc: gitLogActions,
    sourceFuncArgsParser: parseEmptySourceFuncArgs,
    vimCommandOptions,
    defaultFzfOptionFunc: gitLogActionsDefaultOptions,
    defaultProcessesName: "git-log-actions",
    enableConvertForFzf: false,
    enableDevIcons: false,
  },
  {
    commandName: "FzfPreviewGitStashes",
    sourceFunc: gitStashes,
    sourceFuncArgsParser: parseEmptySourceFuncArgs,
    vimCommandOptions,
    defaultFzfOptionFunc: gitStashesDefaultOptions,
    defaultProcessesName: "git-stash",
    enableConvertForFzf: false,
    enableDevIcons: false,
  },
  {
    commandName: "FzfPreviewGitStashActions",
    sourceFunc: gitStashActions,
    sourceFuncArgsParser: parseEmptySourceFuncArgs,
    vimCommandOptions,
    defaultFzfOptionFunc: gitStashActionsDefaultOptions,
    defaultProcessesName: "git-stash-actions",
    enableConvertForFzf: false,
    enableDevIcons: false,
  },
  {
    commandName: "FzfPreviewGitReflogs",
    sourceFunc: gitReflogs,
    sourceFuncArgsParser: parseEmptySourceFuncArgs,
    vimCommandOptions,
    defaultFzfOptionFunc: gitReflogsDefaultOptions,
    defaultProcessesName: "git-reflog",
    enableConvertForFzf: false,
    enableDevIcons: false,
  },
  {
    commandName: "FzfPreviewGitReflogActions",
    sourceFunc: gitReflogActions,
    sourceFuncArgsParser: parseEmptySourceFuncArgs,
    vimCommandOptions,
    defaultFzfOptionFunc: gitReflogActionsDefaultOptions,
    defaultProcessesName: "git-reflog-actions",
    enableConvertForFzf: false,
    enableDevIcons: false,
  },
  {
    commandName: "FzfPreviewVimLspReferences",
    sourceFunc: vimLspReferences,
    sourceFuncArgsParser: parseEmptySourceFuncArgs,
    vimCommandOptions,
    defaultFzfOptionFunc: vimLspReferencesDefaultOptions,
    defaultProcessesName: "open-file",
    enableConvertForFzf: true,
    enableDevIcons: true,
  },
  {
    commandName: "FzfPreviewVimLspDiagnostics",
    sourceFunc: vimLspDiagnostics,
    sourceFuncArgsParser: parseEmptySourceFuncArgs,
    vimCommandOptions,
    defaultFzfOptionFunc: vimLspDiagnosticsDefaultOptions,
    defaultProcessesName: "open-file",
    enableConvertForFzf: true,
    enableDevIcons: true,
  },
  {
    commandName: "FzfPreviewVimLspCurrentDiagnostics",
    sourceFunc: vimLspCurrentDiagnostics,
    sourceFuncArgsParser: parseEmptySourceFuncArgs,
    vimCommandOptions,
    defaultFzfOptionFunc: vimLspCurrentDiagnosticsDefaultOptions,
    defaultProcessesName: "open-file",
    enableConvertForFzf: true,
    enableDevIcons: true,
  },
  {
    commandName: "FzfPreviewVimLspTypeDefinition",
    sourceFunc: vimLspTypeDefinition,
    sourceFuncArgsParser: parseEmptySourceFuncArgs,
    vimCommandOptions,
    defaultFzfOptionFunc: vimLspTypeDefinitionDefaultOptions,
    defaultProcessesName: "open-file",
    enableConvertForFzf: true,
    enableDevIcons: true,
  },
  {
    commandName: "FzfPreviewVimLspImplementation",
    sourceFunc: vimLspImplementation,
    sourceFuncArgsParser: parseEmptySourceFuncArgs,
    vimCommandOptions,
    defaultFzfOptionFunc: vimLspImplementationDefaultOptions,
    defaultProcessesName: "open-file",
    enableConvertForFzf: true,
    enableDevIcons: true,
  },
  {
    commandName: "FzfPreviewBookmarks",
    sourceFunc: bookmarks,
    sourceFuncArgsParser: parseEmptySourceFuncArgs,
    vimCommandOptions,
    defaultFzfOptionFunc: bookmarksDefaultOptions,
    defaultProcessesName: "open-file",
    enableConvertForFzf: true,
    enableDevIcons: true,
  },
  {
    commandName: "FzfPreviewYankround",
    sourceFunc: yankround,
    sourceFuncArgsParser: parseEmptySourceFuncArgs,
    vimCommandOptions,
    defaultFzfOptionFunc: yankroundDefaultOptions,
    defaultProcessesName: "register",
    enableConvertForFzf: false,
    enableDevIcons: false,
  },
  {
    commandName: "FzfPreviewMemoList",
    sourceFunc: memoList,
    sourceFuncArgsParser: parseEmptySourceFuncArgs,
    vimCommandOptions,
    defaultFzfOptionFunc: memoListDefaultOptions,
    defaultProcessesName: "open-file",
    enableConvertForFzf: true,
    enableDevIcons: true,
  },
  {
    commandName: "FzfPreviewMemoListGrep",
    sourceFunc: memoListGrep,
    sourceFuncArgsParser: parseGrepArgs,
    vimCommandOptions,
    defaultFzfOptionFunc: memoListGrepDefaultOptions,
    defaultProcessesName: "open-file",
    enableConvertForFzf: true,
    enableDevIcons: true,
  },
  {
    commandName: "FzfPreviewTodoComments",
    sourceFunc: todoComments,
    sourceFuncArgsParser: parseGrepArgs,
    vimCommandOptions,
    defaultFzfOptionFunc: todoCommentsDefaultOptions,
    defaultProcessesName: "open-file",
    enableConvertForFzf: true,
    enableDevIcons: true,
  },
  {
    commandName: "FzfPreviewVistaCtags",
    sourceFunc: vistaCtags,
    sourceFuncArgsParser: parseEmptySourceFuncArgs,
    vimCommandOptions,
    defaultFzfOptionFunc: vistaCtagsDefaultOptions,
    defaultProcessesName: "open-file",
    enableConvertForFzf: false,
    enableDevIcons: false,
  },
  {
    commandName: "FzfPreviewVistaBufferCtags",
    sourceFunc: vistaBufferCtags,
    sourceFuncArgsParser: parseEmptySourceFuncArgs,
    vimCommandOptions,
    defaultFzfOptionFunc: vistaBufferCtagsDefaultOptions,
    defaultProcessesName: "open-file",
    enableConvertForFzf: false,
    enableDevIcons: false,
  },
  {
    commandName: "FzfPreviewBlamePR",
    sourceFunc: blamePr,
    sourceFuncArgsParser: parseEmptySourceFuncArgs,
    vimCommandOptions,
    defaultFzfOptionFunc: blamePrDefaultOptions,
    defaultProcessesName: "open-pr",
    enableConvertForFzf: false,
    enableDevIcons: false,
  },
] as const
