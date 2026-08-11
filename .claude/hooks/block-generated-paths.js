let input = '';
process.stdin.on('data', (chunk) => { input += chunk; });
process.stdin.on('end', () => {
  try {
    const payload = JSON.parse(input);
    const rawPath = (payload.tool_input && (payload.tool_input.file_path || payload.tool_input.path)) || '';
    const normalized = rawPath.replace(/\\/g, '/');
    const blocked = /(^|\/)(build|coverage|node_modules)\//.test(normalized);

    if (blocked) {
      process.stdout.write(JSON.stringify({
        hookSpecificOutput: {
          hookEventName: 'PreToolUse',
          permissionDecision: 'deny',
          permissionDecisionReason: `"${rawPath}" is generated/vendored output (build/, coverage/, and node_modules/ are never hand-edited). Edit the source instead (e.g. files under src/, or resume/resume.tex for the resume PDF).`,
        },
      }));
    }
    process.exit(0);
  } catch (err) {
    process.exit(0);
  }
});
