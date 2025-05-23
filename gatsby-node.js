/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */

const webpack = require('webpack');

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      fallback: {
        fs: false,
        path: require.resolve('path-browserify'),
        https: require.resolve('https-browserify'),
        http: require.resolve('stream-http')
      }
    },
    plugins: [
      new webpack.ProvidePlugin({
        process: 'process/browser',
        Buffer: ['buffer', 'Buffer']
      })
    ]
  });
};

exports.createResolvers = ({ createResolvers, addFrontmatterType }) => {
  const resolvers = {
    MdxFrontmatter: {
      title: {
        type: 'String',
        resolve: addFrontmatterType
      },
      keywords: {
        type: '[String]',
        resolve: addFrontmatterType
      },
      description: {
        type: 'String',
        resolve: addFrontmatterType
      },
      contributors: {
        type: '[String]',
        resolve: addFrontmatterType
      },
      openAPISpec: {
        type: 'String',
        resolve: addFrontmatterType
      },
      frameSrc: {
        type: 'String',
        resolve: addFrontmatterType
      },
      frameHeight: {
        type: 'String',
        resolve: addFrontmatterType
      },
      layout: {
        type: 'String',
        resolve: addFrontmatterType
      },
      jsDoc: {
        type: 'Boolean',
        resolve: addFrontmatterType
      },
      ogImage : {
        type : 'String',
        resolve: addFrontmatterType
      }
    }
  };

  addFrontmatterType = (source, context) =>
    context.nodeModel.getNodeById({
      id: source.MdxFrontmatter
    });

  createResolvers(resolvers);
};

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;
    let temp = [
      { filePath: './src/pages/index.md', url:'homepage' }
    ]
    // { filePath: './src/pages/pricing/index.md', url:'pricing/main' },

    temp.map(val => {
        const myComponent = require.resolve(val.filePath);
        createPage({
            path: val.url,
            component: myComponent,
            context: {},
        })
    })
};
