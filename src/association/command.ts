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
  gitFiles,
  gitFilesDefaultOptions,
  gitStatus,
  gitStatusDefaultOptions,
  jumps,
  jumpsDefaultOptions,
  lines,
  linesDefaultOptions,
  locationList,
  locationListDefaultOptions,
  marks,
  marksDefaultOptions,
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
import {
  buffersFormatSyntax,
  fileListFormatBaseSyntax,
  gitStatusFormatSyntax,
  grepFormatBaseSyntax,
} from "@/fzf/syntax"
import type { RemoteFzfCommand } from "@/type"

export const vimCommandOptions = {
  nargs: "?",
  sync: true,
} as const

export const commandDefinition: ReadonlyArray<RemoteFzfCommand> = [
  {
    commandName: "FzfPreviewProjectFiles",
    sourceFunc: projectFiles,
    sourceFuncArgsParser: parseEmptySourceFuncArgs,
    vimCommandOptions,
    defaultFzfOptionFunc: projectFilesDefaultOptions,
    defaultProcessesName: "open-file",
    enableConvertForFzf: true,
    enableDevIcons: true,
    enablePostProcessCommand: true,
    syntaxCommands: fileListFormatBaseSyntax,
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
    enablePostProcessCommand: true,
    syntaxCommands: fileListFormatBaseSyntax,
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
    enablePostProcessCommand: true,
    syntaxCommands: fileListFormatBaseSyntax,
  },
  {
    commandName: "FzfPreviewBuffers",
    sourceFunc: buffers,
    sourceFuncArgsParser: parseEmptySourceFuncArgs,
    vimCommandOptions,
    defaultFzfOptionFunc: buffersDefaultOptions,
    defaultProcessesName: "open-buffer",
    enableConvertForFzf: false,
    enableDevIcons: false,
    enablePostProcessCommand: false,
    syntaxCommands: buffersFormatSyntax,
  },
  {
    commandName: "FzfPreviewAllBuffers",
    sourceFunc: allBuffers,
    sourceFuncArgsParser: parseEmptySourceFuncArgs,
    vimCommandOptions,
    defaultFzfOptionFunc: allBuffersDefaultOptions,
    defaultProcessesName: "open-bufnr",
    enableConvertForFzf: false,
    enableDevIcons: false,
    enablePostProcessCommand: false,
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
    enablePostProcessCommand: true,
    syntaxCommands: fileListFormatBaseSyntax,
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
    enablePostProcessCommand: true,
    syntaxCommands: fileListFormatBaseSyntax,
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
    enablePostProcessCommand: true,
    syntaxCommands: fileListFormatBaseSyntax,
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
    enablePostProcessCommand: false,
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
    enablePostProcessCommand: false,
    syntaxCommands: grepFormatBaseSyntax,
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
    enablePostProcessCommand: false,
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
    enablePostProcessCommand: false,
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
    enablePostProcessCommand: true,
    syntaxCommands: fileListFormatBaseSyntax,
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
    enablePostProcessCommand: true,
    syntaxCommands: fileListFormatBaseSyntax,
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
    enablePostProcessCommand: true,
    syntaxCommands: fileListFormatBaseSyntax,
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
    enablePostProcessCommand: false,
    syntaxCommands: grepFormatBaseSyntax,
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
    enablePostProcessCommand: false,
    syntaxCommands: grepFormatBaseSyntax,
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
    enablePostProcessCommand: false,
    syntaxCommands: grepFormatBaseSyntax,
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
    enablePostProcessCommand: false,
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
    enablePostProcessCommand: false,
    syntaxCommands: grepFormatBaseSyntax,
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
    enablePostProcessCommand: false,
    syntaxCommands: grepFormatBaseSyntax,
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
    enablePostProcessCommand: true,
    syntaxCommands: fileListFormatBaseSyntax,
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
    enablePostProcessCommand: false,
  },
  {
    commandName: "FzfPreviewGitStatus",
    sourceFunc: gitStatus,
    sourceFuncArgsParser: parseEmptySourceFuncArgs,
    vimCommandOptions,
    defaultFzfOptionFunc: gitStatusDefaultOptions,
    defaultProcessesName: "git-status",
    enableConvertForFzf: false,
    enableDevIcons: false,
    enablePostProcessCommand: false,
    syntaxCommands: gitStatusFormatSyntax,
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
    enablePostProcessCommand: false,
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
    enablePostProcessCommand: false,
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
    enablePostProcessCommand: false,
    syntaxCommands: grepFormatBaseSyntax,
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
    enablePostProcessCommand: false,
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
    enablePostProcessCommand: false,
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
    enablePostProcessCommand: false,
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
    enablePostProcessCommand: false,
  },
] as const
