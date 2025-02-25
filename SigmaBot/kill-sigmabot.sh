#!/bin/bash

echo "🔍 Searching for running SigmaBot processes..."
PIDS=$(ps aux | grep 'ts-node src/index.ts' | grep -v grep | awk '{print $2}')

if [ -z "$PIDS" ]; then
    echo "✅ No active SigmaBot processes found."
else
    echo "🚨 Found running SigmaBot processes: $PIDS"
    echo "🛑 Killing processes..."
    kill $PIDS
    echo "✅ All SigmaBot processes have been stopped."
fi
