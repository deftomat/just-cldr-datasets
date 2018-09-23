# Clear
rm -f *.d.ts
rm -f *.js
rm -rf tmp

# Generate
mkdir tmp
cp ./predefined/* ./tmp/
./bin/generate.js
tsc
rm -rf tmp
