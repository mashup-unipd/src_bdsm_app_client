from distutils.core import setup

import os
import io
import src

here = os.path.abspath(os.path.dirname(__file__))

def read(*filenames, **kwargs):
    encoding = kwargs.get('encoding', 'utf-8')
    sep = kwargs.get('sep', '\n')
    buf = []
    for filename in filenames:
        with io.open(filename, encoding=encoding) as f:
            buf.append(f.read())
    return sep.join(buf)

long_description = read('README.md')

setup(
    name='bdsmapp server',
    version=src.__version__,
    url='http://mashup-unipd.github.io/src_BDSM_App/',
    license='Apache Software License',
    author='MashUp',
    author_email='info@mashup-unipd.it',
    description='Big Data Social Monitor Application',
    long_description=long_description,
    packages=['src'],
    platforms='any',
)