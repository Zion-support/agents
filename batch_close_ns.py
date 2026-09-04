#!/usr/bin/env python3
import json, subprocess, sys

# Get all open New Service issues (up to 500)
result = subprocess.run(
    ['gh', 'issue', 'list', '--state', 'open', '--json', 'number,title', '--limit', '500'],
    capture_output=True, text=True
)
issues = json.loads(result.stdout)
new_service = [i['number'] for i in issues if i['title'].startswith('New Service:')]
print(f'Found {len(new_service)} New Service issues to close')

closed = 0
for num in new_service:
    try:
        subprocess.run(
            ['gh', 'issue', 'close', str(num), '--comment', 'Auto-closed: generic New Service placeholder — not actionable'],
            capture_output=True, text=True, timeout=30
        )
        closed += 1
        if closed % 25 == 0:
            print(f'  Progress: {closed}/{len(new_service)}')
    except Exception as e:
        print(f'  Error closing #{num}: {e}')

print(f'All issues closed: {closed}')
