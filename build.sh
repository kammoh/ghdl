#!/bin/bash
export PATH=/usr/local/opt/GNAT/2018/bin:$PATH
#~/gnat-gcc-8.1.0-x86_64-apple-darwin15-bin/bin
./configure --enable-python --with-llvm-config=/usr/local/opt/llvm/bin/llvm-config && make -j8 && make install || echo "*** ERROR Build Failed ***" ; exit 1
