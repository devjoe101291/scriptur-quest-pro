# Script to capture Android app crash logs
Write-Host "Starting log capture - Reproduce the crash now!" -ForegroundColor Yellow
Write-Host "Press Ctrl+C to stop capturing logs" -ForegroundColor Yellow

# Filter for app-specific and crash-related logs
adb logcat -c
adb logcat -v time | Select-String -Pattern "scripturquest|AndroidRuntime|FATAL|chromium|Console|Error|Exception" -Context 1,3
