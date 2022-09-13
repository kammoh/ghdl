GNATdoc.Documentation = {
  "label": "Elab.Vhdl_Context",
  "qualifier": "",
  "summary": [
  ],
  "description": [
    {
      "kind": "paragraph",
      "children": [
        {
          "kind": "span",
          "text": "Values are stored into Synth_Instance, which is parallel to simulation\n"
        },
        {
          "kind": "span",
          "text": "Block_Instance_Type.\n"
        }
      ]
    }
  ],
  "entities": [
    {
      "entities": [
        {
          "label": "First_Instance_Id",
          "qualifier": "",
          "line": 39,
          "column": 4,
          "src": "srcs/elab-vhdl_context.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 39,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "First_Instance_Id"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "constant"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Instance_Id_Type"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":="
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "number",
                      "text": "1"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "label": "Iterator_Top_Level_Init",
          "qualifier": "",
          "line": 192,
          "column": 4,
          "src": "srcs/elab-vhdl_context.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 192,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Iterator_Top_Level_Init"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "constant"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Iterator_Top_Level_Type"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "label": "Root_Instance",
          "qualifier": "",
          "line": 35,
          "column": 4,
          "src": "srcs/elab-vhdl_context.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 35,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Root_Instance"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Synth_Instance_Acc"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      "label": "Constants and variables"
    },
    {
      "entities": [
        {
          "label": "Instance_Id_Type",
          "qualifier": "",
          "line": 38,
          "column": 9,
          "src": "srcs/elab-vhdl_context.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 38,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "   "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "type"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Instance_Id_Type",
                      "href": "docs/elab__vhdl_context___spec.html#L38C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "is"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "new"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Natural"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                }
              ]
            },
            {
              "kind": "paragraph",
              "children": [
                {
                  "kind": "span",
                  "text": "Unique per instance id.  Used to create parallel tables.\n"
                }
              ]
            }
          ]
        }
      ],
      "label": "Simple types"
    },
    {
      "entities": [
        {
          "label": "Synth_Instance_Acc",
          "qualifier": "",
          "line": 33,
          "column": 9,
          "src": "srcs/elab-vhdl_context.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 33,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "   "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "type"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Synth_Instance_Acc",
                      "href": "docs/elab__vhdl_context___spec.html#L33C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "is"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "access"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Synth_Instance_Type",
                      "href": "docs/elab__vhdl_context___spec.html#L229C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      "label": "Access types"
    },
    {
      "entities": [
        {
          "label": "Destroy_Type",
          "qualifier": "",
          "line": 154,
          "column": 9,
          "src": "srcs/elab-vhdl_context.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 154,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "   "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "type"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Destroy_Type",
                      "href": "docs/elab__vhdl_context___spec.html#L154C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "is"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "limited"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "private"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "label": "Iterator_Top_Level_Type",
          "qualifier": "",
          "line": 191,
          "column": 9,
          "src": "srcs/elab-vhdl_context.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 191,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "   "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "type"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Iterator_Top_Level_Type",
                      "href": "docs/elab__vhdl_context___spec.html#L191C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "is"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "private"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                }
              ]
            },
            {
              "kind": "paragraph",
              "children": [
                {
                  "kind": "span",
                  "text": "Iterator over top-level packages.\n"
                }
              ]
            }
          ]
        },
        {
          "label": "Synth_Instance_Type",
          "qualifier": "",
          "line": 32,
          "column": 9,
          "src": "srcs/elab-vhdl_context.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 32,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "   "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "type"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Synth_Instance_Type",
                      "href": "docs/elab__vhdl_context___spec.html#L32C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "("
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "<>"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ")"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "is"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "limited"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "private"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      "label": "Record types"
    },
    {
      "entities": [
        {
          "label": "Add_Extra_Instance",
          "qualifier": "",
          "line": 95,
          "column": 14,
          "src": "srcs/elab-vhdl_context.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 95,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "   "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "procedure"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Add_Extra_Instance",
                      "href": "docs/elab__vhdl_context___spec.html#L95C14"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "("
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Inst",
                      "href": "docs/elab__vhdl_context___spec.html#L95C34"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Synth_Instance_Acc",
                      "href": "docs/elab__vhdl_context___spec.html#L33C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 96,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "                                 "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Extra",
                      "href": "docs/elab__vhdl_context___spec.html#L96C34"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Synth_Instance_Acc",
                      "href": "docs/elab__vhdl_context___spec.html#L33C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ")"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                }
              ]
            },
            {
              "kind": "paragraph",
              "children": [
                {
                  "kind": "span",
                  "text": "Add/Get extra instances.\n"
                },
                {
                  "kind": "span",
                  "text": "Those instances are verification units.\n"
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "Inst",
              "line": 95,
              "column": 34,
              "type": {
                "label": "Elab.Vhdl_Context.Synth_Instance_Acc",
                "docHref": "docs/elab__vhdl_context___spec.html#L33C9"
              },
              "description": [
              ]
            },
            {
              "label": "Extra",
              "line": 96,
              "column": 34,
              "type": {
                "label": "Elab.Vhdl_Context.Synth_Instance_Acc",
                "docHref": "docs/elab__vhdl_context___spec.html#L33C9"
              },
              "description": [
              ]
            }
          ]
        },
        {
          "label": "Create_Component_Instance",
          "qualifier": "",
          "line": 120,
          "column": 14,
          "src": "srcs/elab-vhdl_context.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 120,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "   "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "procedure"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Create_Component_Instance",
                      "href": "docs/elab__vhdl_context___spec.html#L120C14"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "("
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Syn_Inst",
                      "href": "docs/elab__vhdl_context___spec.html#L120C41"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Synth_Instance_Acc",
                      "href": "docs/elab__vhdl_context___spec.html#L33C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 121,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "                                        "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Sub_Inst",
                      "href": "docs/elab__vhdl_context___spec.html#L121C41"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Synth_Instance_Acc",
                      "href": "docs/elab__vhdl_context___spec.html#L33C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ")"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                }
              ]
            },
            {
              "kind": "paragraph",
              "children": [
                {
                  "kind": "span",
                  "text": "Create a sub instance for a component.\n"
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "Syn_Inst",
              "line": 120,
              "column": 41,
              "type": {
                "label": "Elab.Vhdl_Context.Synth_Instance_Acc",
                "docHref": "docs/elab__vhdl_context___spec.html#L33C9"
              },
              "description": [
              ]
            },
            {
              "label": "Sub_Inst",
              "line": 121,
              "column": 41,
              "type": {
                "label": "Elab.Vhdl_Context.Synth_Instance_Acc",
                "docHref": "docs/elab__vhdl_context___spec.html#L33C9"
              },
              "description": [
              ]
            }
          ]
        },
        {
          "label": "Create_Object",
          "qualifier": "",
          "line": 102,
          "column": 14,
          "src": "srcs/elab-vhdl_context.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 102,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "   "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "procedure"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Create_Object",
                      "href": "docs/elab__vhdl_context___spec.html#L102C14"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 103,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "     "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "("
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Syn_Inst",
                      "href": "docs/elab__vhdl_context___spec.html#L103C7"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Synth_Instance_Acc",
                      "href": "docs/elab__vhdl_context___spec.html#L33C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Decl",
                      "href": "docs/elab__vhdl_context___spec.html#L103C38"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Node",
                      "href": "docs/vhdl__nodes___spec.html#L7254C12"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Vt",
                      "href": "docs/elab__vhdl_context___spec.html#L103C51"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Valtyp",
                      "href": "docs/elab__vhdl_values___spec.html#L121C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ")"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "Syn_Inst",
              "line": 103,
              "column": 7,
              "type": {
                "label": "Elab.Vhdl_Context.Synth_Instance_Acc",
                "docHref": "docs/elab__vhdl_context___spec.html#L33C9"
              },
              "description": [
              ]
            },
            {
              "label": "Decl",
              "line": 103,
              "column": 38,
              "type": {
                "label": "Vhdl.Nodes.Node",
                "docHref": "docs/vhdl__nodes___spec.html#L7254C12"
              },
              "description": [
              ]
            },
            {
              "label": "Vt",
              "line": 103,
              "column": 51,
              "type": {
                "label": "Elab.Vhdl_Values.Valtyp",
                "docHref": "docs/elab__vhdl_values___spec.html#L121C9"
              },
              "description": [
              ]
            }
          ]
        },
        {
          "label": "Create_Object_Force",
          "qualifier": "",
          "line": 141,
          "column": 14,
          "src": "srcs/elab-vhdl_context.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 141,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "   "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "procedure"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Create_Object_Force",
                      "href": "docs/elab__vhdl_context___spec.html#L141C14"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 142,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "     "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "("
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Syn_Inst",
                      "href": "docs/elab__vhdl_context___spec.html#L142C7"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Synth_Instance_Acc",
                      "href": "docs/elab__vhdl_context___spec.html#L33C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Decl",
                      "href": "docs/elab__vhdl_context___spec.html#L142C38"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Node",
                      "href": "docs/vhdl__nodes___spec.html#L7254C12"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Vt",
                      "href": "docs/elab__vhdl_context___spec.html#L142C51"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Valtyp",
                      "href": "docs/elab__vhdl_values___spec.html#L121C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ")"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                }
              ]
            },
            {
              "kind": "paragraph",
              "children": [
                {
                  "kind": "span",
                  "text": "Force the value of DECL, without checking for elaboration order.\n"
                },
                {
                  "kind": "span",
                  "text": "It is for deferred constants.\n"
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "Syn_Inst",
              "line": 142,
              "column": 7,
              "type": {
                "label": "Elab.Vhdl_Context.Synth_Instance_Acc",
                "docHref": "docs/elab__vhdl_context___spec.html#L33C9"
              },
              "description": [
              ]
            },
            {
              "label": "Decl",
              "line": 142,
              "column": 38,
              "type": {
                "label": "Vhdl.Nodes.Node",
                "docHref": "docs/vhdl__nodes___spec.html#L7254C12"
              },
              "description": [
              ]
            },
            {
              "label": "Vt",
              "line": 142,
              "column": 51,
              "type": {
                "label": "Elab.Vhdl_Values.Valtyp",
                "docHref": "docs/elab__vhdl_values___spec.html#L121C9"
              },
              "description": [
              ]
            }
          ]
        },
        {
          "label": "Create_Object_Marker",
          "qualifier": "",
          "line": 151,
          "column": 14,
          "src": "srcs/elab-vhdl_context.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 151,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "   "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "procedure"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Create_Object_Marker",
                      "href": "docs/elab__vhdl_context___spec.html#L151C14"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 152,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "     "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "("
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Syn_Inst",
                      "href": "docs/elab__vhdl_context___spec.html#L152C7"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Synth_Instance_Acc",
                      "href": "docs/elab__vhdl_context___spec.html#L33C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "N",
                      "href": "docs/elab__vhdl_context___spec.html#L152C38"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Node",
                      "href": "docs/vhdl__nodes___spec.html#L7254C12"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Pool",
                      "href": "docs/elab__vhdl_context___spec.html#L152C48"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Areapools.Areapool_Acc",
                      "href": "docs/areapools___spec.html#L26C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ")"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                }
              ]
            },
            {
              "kind": "paragraph",
              "children": [
                {
                  "kind": "span",
                  "text": "Save an areapool mark (likely the instance_pool).\n"
                },
                {
                  "kind": "span",
                  "text": "Used by for-loop.\n"
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "Syn_Inst",
              "line": 152,
              "column": 7,
              "type": {
                "label": "Elab.Vhdl_Context.Synth_Instance_Acc",
                "docHref": "docs/elab__vhdl_context___spec.html#L33C9"
              },
              "description": [
              ]
            },
            {
              "label": "N",
              "line": 152,
              "column": 38,
              "type": {
                "label": "Vhdl.Nodes.Node",
                "docHref": "docs/vhdl__nodes___spec.html#L7254C12"
              },
              "description": [
              ]
            },
            {
              "label": "Pool",
              "line": 152,
              "column": 48,
              "type": {
                "label": "Areapools.Areapool_Acc",
                "docHref": "docs/areapools___spec.html#L26C9"
              },
              "description": [
              ]
            }
          ]
        },
        {
          "label": "Create_Package_Instance",
          "qualifier": "",
          "line": 128,
          "column": 13,
          "src": "srcs/elab-vhdl_context.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 128,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "   "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "function"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Create_Package_Instance",
                      "href": "docs/elab__vhdl_context___spec.html#L128C13"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "("
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Parent_Inst",
                      "href": "docs/elab__vhdl_context___spec.html#L128C38"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Synth_Instance_Acc",
                      "href": "docs/elab__vhdl_context___spec.html#L33C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 129,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "                                     "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Pkg",
                      "href": "docs/elab__vhdl_context___spec.html#L129C38"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Node",
                      "href": "docs/vhdl__nodes___spec.html#L7254C12"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ")"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 130,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "                                    "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "return"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Synth_Instance_Acc",
                      "href": "docs/elab__vhdl_context___spec.html#L33C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "Parent_Inst",
              "line": 128,
              "column": 38,
              "type": {
                "label": "Elab.Vhdl_Context.Synth_Instance_Acc",
                "docHref": "docs/elab__vhdl_context___spec.html#L33C9"
              },
              "description": [
              ]
            },
            {
              "label": "Pkg",
              "line": 129,
              "column": 38,
              "type": {
                "label": "Vhdl.Nodes.Node",
                "docHref": "docs/vhdl__nodes___spec.html#L7254C12"
              },
              "description": [
              ]
            }
          ]
        },
        {
          "label": "Create_Package_Interface",
          "qualifier": "",
          "line": 132,
          "column": 14,
          "src": "srcs/elab-vhdl_context.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 132,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "   "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "procedure"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Create_Package_Interface",
                      "href": "docs/elab__vhdl_context___spec.html#L132C14"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "("
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Syn_Inst",
                      "href": "docs/elab__vhdl_context___spec.html#L132C40"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Synth_Instance_Acc",
                      "href": "docs/elab__vhdl_context___spec.html#L33C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 133,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "                                       "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Decl",
                      "href": "docs/elab__vhdl_context___spec.html#L133C40"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "     "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Node",
                      "href": "docs/vhdl__nodes___spec.html#L7254C12"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 134,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "                                       "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Inst",
                      "href": "docs/elab__vhdl_context___spec.html#L134C40"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "     "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Synth_Instance_Acc",
                      "href": "docs/elab__vhdl_context___spec.html#L33C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ")"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "Syn_Inst",
              "line": 132,
              "column": 40,
              "type": {
                "label": "Elab.Vhdl_Context.Synth_Instance_Acc",
                "docHref": "docs/elab__vhdl_context___spec.html#L33C9"
              },
              "description": [
              ]
            },
            {
              "label": "Decl",
              "line": 133,
              "column": 40,
              "type": {
                "label": "Vhdl.Nodes.Node",
                "docHref": "docs/vhdl__nodes___spec.html#L7254C12"
              },
              "description": [
              ]
            },
            {
              "label": "Inst",
              "line": 134,
              "column": 40,
              "type": {
                "label": "Elab.Vhdl_Context.Synth_Instance_Acc",
                "docHref": "docs/elab__vhdl_context___spec.html#L33C9"
              },
              "description": [
              ]
            }
          ]
        },
        {
          "label": "Create_Package_Object",
          "qualifier": "",
          "line": 123,
          "column": 14,
          "src": "srcs/elab-vhdl_context.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 123,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "   "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "procedure"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Create_Package_Object",
                      "href": "docs/elab__vhdl_context___spec.html#L123C14"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "("
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Syn_Inst",
                      "href": "docs/elab__vhdl_context___spec.html#L123C37"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Synth_Instance_Acc",
                      "href": "docs/elab__vhdl_context___spec.html#L33C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 124,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "                                    "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Decl",
                      "href": "docs/elab__vhdl_context___spec.html#L124C37"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Node",
                      "href": "docs/vhdl__nodes___spec.html#L7254C12"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 125,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "                                    "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Inst",
                      "href": "docs/elab__vhdl_context___spec.html#L125C37"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Synth_Instance_Acc",
                      "href": "docs/elab__vhdl_context___spec.html#L33C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 126,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "                                    "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Is_Global",
                      "href": "docs/elab__vhdl_context___spec.html#L126C37"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Boolean"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ")"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "Syn_Inst",
              "line": 123,
              "column": 37,
              "type": {
                "label": "Elab.Vhdl_Context.Synth_Instance_Acc",
                "docHref": "docs/elab__vhdl_context___spec.html#L33C9"
              },
              "description": [
              ]
            },
            {
              "label": "Decl",
              "line": 124,
              "column": 37,
              "type": {
                "label": "Vhdl.Nodes.Node",
                "docHref": "docs/vhdl__nodes___spec.html#L7254C12"
              },
              "description": [
              ]
            },
            {
              "label": "Inst",
              "line": 125,
              "column": 37,
              "type": {
                "label": "Elab.Vhdl_Context.Synth_Instance_Acc",
                "docHref": "docs/elab__vhdl_context___spec.html#L33C9"
              },
              "description": [
              ]
            },
            {
              "label": "Is_Global",
              "line": 126,
              "column": 37,
              "type": {
                "label": "Boolean"
              },
              "description": [
              ]
            }
          ]
        },
        {
          "label": "Create_Signal",
          "qualifier": "",
          "line": 105,
          "column": 14,
          "src": "srcs/elab-vhdl_context.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 105,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "   "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "procedure"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Create_Signal",
                      "href": "docs/elab__vhdl_context___spec.html#L105C14"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "("
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Syn_Inst",
                      "href": "docs/elab__vhdl_context___spec.html#L105C29"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Synth_Instance_Acc",
                      "href": "docs/elab__vhdl_context___spec.html#L33C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 106,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "                            "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Decl",
                      "href": "docs/elab__vhdl_context___spec.html#L106C29"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Node",
                      "href": "docs/vhdl__nodes___spec.html#L7254C12"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 107,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "                            "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Typ",
                      "href": "docs/elab__vhdl_context___spec.html#L107C29"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Type_Acc",
                      "href": "docs/elab__vhdl_objtypes___spec.html#L101C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 108,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "                            "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Init",
                      "href": "docs/elab__vhdl_context___spec.html#L108C29"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Value_Acc",
                      "href": "docs/elab__vhdl_values___spec.html#L68C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ")"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "Syn_Inst",
              "line": 105,
              "column": 29,
              "type": {
                "label": "Elab.Vhdl_Context.Synth_Instance_Acc",
                "docHref": "docs/elab__vhdl_context___spec.html#L33C9"
              },
              "description": [
              ]
            },
            {
              "label": "Decl",
              "line": 106,
              "column": 29,
              "type": {
                "label": "Vhdl.Nodes.Node",
                "docHref": "docs/vhdl__nodes___spec.html#L7254C12"
              },
              "description": [
              ]
            },
            {
              "label": "Typ",
              "line": 107,
              "column": 29,
              "type": {
                "label": "Elab.Vhdl_Objtypes.Type_Acc",
                "docHref": "docs/elab__vhdl_objtypes___spec.html#L101C9"
              },
              "description": [
              ]
            },
            {
              "label": "Init",
              "line": 108,
              "column": 29,
              "type": {
                "label": "Elab.Vhdl_Values.Value_Acc",
                "docHref": "docs/elab__vhdl_values___spec.html#L68C9"
              },
              "description": [
              ]
            }
          ]
        },
        {
          "label": "Create_Sub_Instance",
          "qualifier": "",
          "line": 115,
          "column": 14,
          "src": "srcs/elab-vhdl_context.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 115,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "   "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "procedure"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Create_Sub_Instance",
                      "href": "docs/elab__vhdl_context___spec.html#L115C14"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "("
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Syn_Inst",
                      "href": "docs/elab__vhdl_context___spec.html#L115C35"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Synth_Instance_Acc",
                      "href": "docs/elab__vhdl_context___spec.html#L33C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 116,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "                                  "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Stmt",
                      "href": "docs/elab__vhdl_context___spec.html#L116C35"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Node",
                      "href": "docs/vhdl__nodes___spec.html#L7254C12"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 117,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "                                  "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Sub_Inst",
                      "href": "docs/elab__vhdl_context___spec.html#L117C35"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Synth_Instance_Acc",
                      "href": "docs/elab__vhdl_context___spec.html#L33C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ")"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                }
              ]
            },
            {
              "kind": "paragraph",
              "children": [
                {
                  "kind": "span",
                  "text": "Create a sub instance: either a direct entity instantiation, or\n"
                },
                {
                  "kind": "span",
                  "text": "a component instantiation.\n"
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "Syn_Inst",
              "line": 115,
              "column": 35,
              "type": {
                "label": "Elab.Vhdl_Context.Synth_Instance_Acc",
                "docHref": "docs/elab__vhdl_context___spec.html#L33C9"
              },
              "description": [
              ]
            },
            {
              "label": "Stmt",
              "line": 116,
              "column": 35,
              "type": {
                "label": "Vhdl.Nodes.Node",
                "docHref": "docs/vhdl__nodes___spec.html#L7254C12"
              },
              "description": [
              ]
            },
            {
              "label": "Sub_Inst",
              "line": 117,
              "column": 35,
              "type": {
                "label": "Elab.Vhdl_Context.Synth_Instance_Acc",
                "docHref": "docs/elab__vhdl_context___spec.html#L33C9"
              },
              "description": [
              ]
            }
          ]
        },
        {
          "label": "Create_Subtype_Object",
          "qualifier": "",
          "line": 136,
          "column": 14,
          "src": "srcs/elab-vhdl_context.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 136,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "   "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "procedure"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Create_Subtype_Object",
                      "href": "docs/elab__vhdl_context___spec.html#L136C14"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 137,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "     "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "("
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Syn_Inst",
                      "href": "docs/elab__vhdl_context___spec.html#L137C7"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Synth_Instance_Acc",
                      "href": "docs/elab__vhdl_context___spec.html#L33C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Decl",
                      "href": "docs/elab__vhdl_context___spec.html#L137C38"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Node",
                      "href": "docs/vhdl__nodes___spec.html#L7254C12"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Typ",
                      "href": "docs/elab__vhdl_context___spec.html#L137C51"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Type_Acc",
                      "href": "docs/elab__vhdl_objtypes___spec.html#L101C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ")"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "Syn_Inst",
              "line": 137,
              "column": 7,
              "type": {
                "label": "Elab.Vhdl_Context.Synth_Instance_Acc",
                "docHref": "docs/elab__vhdl_context___spec.html#L33C9"
              },
              "description": [
              ]
            },
            {
              "label": "Decl",
              "line": 137,
              "column": 38,
              "type": {
                "label": "Vhdl.Nodes.Node",
                "docHref": "docs/vhdl__nodes___spec.html#L7254C12"
              },
              "description": [
              ]
            },
            {
              "label": "Typ",
              "line": 137,
              "column": 51,
              "type": {
                "label": "Elab.Vhdl_Objtypes.Type_Acc",
                "docHref": "docs/elab__vhdl_objtypes___spec.html#L101C9"
              },
              "description": [
              ]
            }
          ]
        },
        {
          "label": "Destroy_Finish",
          "qualifier": "",
          "line": 160,
          "column": 14,
          "src": "srcs/elab-vhdl_context.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 160,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "   "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "procedure"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Destroy_Finish",
                      "href": "docs/elab__vhdl_context___spec.html#L160C14"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "("
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "D",
                      "href": "docs/elab__vhdl_context___spec.html#L160C30"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "in"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "out"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Destroy_Type",
                      "href": "docs/elab__vhdl_context___spec.html#L197C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ")"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "D",
              "line": 160,
              "column": 30,
              "type": {
                "label": "Elab.Vhdl_Context.Destroy_Type",
                "docHref": "docs/elab__vhdl_context___spec.html#L154C9"
              },
              "description": [
              ]
            }
          ]
        },
        {
          "label": "Destroy_Init",
          "qualifier": "",
          "line": 155,
          "column": 14,
          "src": "srcs/elab-vhdl_context.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 155,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "   "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "procedure"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Destroy_Init",
                      "href": "docs/elab__vhdl_context___spec.html#L155C14"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "("
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "D",
                      "href": "docs/elab__vhdl_context___spec.html#L155C28"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "out"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Destroy_Type",
                      "href": "docs/elab__vhdl_context___spec.html#L197C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 156,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "                           "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Syn_Inst",
                      "href": "docs/elab__vhdl_context___spec.html#L156C28"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Synth_Instance_Acc",
                      "href": "docs/elab__vhdl_context___spec.html#L33C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ")"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "D",
              "line": 155,
              "column": 28,
              "type": {
                "label": "Elab.Vhdl_Context.Destroy_Type",
                "docHref": "docs/elab__vhdl_context___spec.html#L154C9"
              },
              "description": [
              ]
            },
            {
              "label": "Syn_Inst",
              "line": 156,
              "column": 28,
              "type": {
                "label": "Elab.Vhdl_Context.Synth_Instance_Acc",
                "docHref": "docs/elab__vhdl_context___spec.html#L33C9"
              },
              "description": [
              ]
            }
          ]
        },
        {
          "label": "Destroy_Marker",
          "qualifier": "",
          "line": 158,
          "column": 14,
          "src": "srcs/elab-vhdl_context.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 158,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "   "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "procedure"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Destroy_Marker",
                      "href": "docs/elab__vhdl_context___spec.html#L158C14"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 159,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "     "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "("
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "D",
                      "href": "docs/elab__vhdl_context___spec.html#L159C7"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "in"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "out"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Destroy_Type",
                      "href": "docs/elab__vhdl_context___spec.html#L197C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "N",
                      "href": "docs/elab__vhdl_context___spec.html#L159C32"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Node",
                      "href": "docs/vhdl__nodes___spec.html#L7254C12"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Pool",
                      "href": "docs/elab__vhdl_context___spec.html#L159C42"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Areapools.Areapool_Acc",
                      "href": "docs/areapools___spec.html#L26C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ")"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "D",
              "line": 159,
              "column": 7,
              "type": {
                "label": "Elab.Vhdl_Context.Destroy_Type",
                "docHref": "docs/elab__vhdl_context___spec.html#L154C9"
              },
              "description": [
              ]
            },
            {
              "label": "N",
              "line": 159,
              "column": 32,
              "type": {
                "label": "Vhdl.Nodes.Node",
                "docHref": "docs/vhdl__nodes___spec.html#L7254C12"
              },
              "description": [
              ]
            },
            {
              "label": "Pool",
              "line": 159,
              "column": 42,
              "type": {
                "label": "Areapools.Areapool_Acc",
                "docHref": "docs/areapools___spec.html#L26C9"
              },
              "description": [
              ]
            }
          ]
        },
        {
          "label": "Destroy_Object",
          "qualifier": "",
          "line": 157,
          "column": 14,
          "src": "srcs/elab-vhdl_context.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 157,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "   "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "procedure"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Destroy_Object",
                      "href": "docs/elab__vhdl_context___spec.html#L157C14"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "("
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "D",
                      "href": "docs/elab__vhdl_context___spec.html#L157C30"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "in"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "out"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Destroy_Type",
                      "href": "docs/elab__vhdl_context___spec.html#L197C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Decl",
                      "href": "docs/elab__vhdl_context___spec.html#L157C55"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Node",
                      "href": "docs/vhdl__nodes___spec.html#L7254C12"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ")"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "D",
              "line": 157,
              "column": 30,
              "type": {
                "label": "Elab.Vhdl_Context.Destroy_Type",
                "docHref": "docs/elab__vhdl_context___spec.html#L154C9"
              },
              "description": [
              ]
            },
            {
              "label": "Decl",
              "line": 157,
              "column": 55,
              "type": {
                "label": "Vhdl.Nodes.Node",
                "docHref": "docs/vhdl__nodes___spec.html#L7254C12"
              },
              "description": [
              ]
            }
          ]
        },
        {
          "label": "Free_Base_Instance",
          "qualifier": "",
          "line": 54,
          "column": 14,
          "src": "srcs/elab-vhdl_context.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 54,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "   "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "procedure"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Free_Base_Instance",
                      "href": "docs/elab__vhdl_context___spec.html#L54C14"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                }
              ]
            },
            {
              "kind": "paragraph",
              "children": [
                {
                  "kind": "span",
                  "text": "Free the first instance.\n"
                }
              ]
            }
          ]
        },
        {
          "label": "Free_Elab_Instance",
          "qualifier": "",
          "line": 61,
          "column": 14,
          "src": "srcs/elab-vhdl_context.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 61,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "   "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "procedure"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Free_Elab_Instance",
                      "href": "docs/elab__vhdl_context___spec.html#L61C14"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "("
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Synth_Inst",
                      "href": "docs/elab__vhdl_context___spec.html#L61C34"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "in"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "out"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Synth_Instance_Acc",
                      "href": "docs/elab__vhdl_context___spec.html#L33C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ")"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "Synth_Inst",
              "line": 61,
              "column": 34,
              "type": {
                "label": "Elab.Vhdl_Context.Synth_Instance_Acc",
                "docHref": "docs/elab__vhdl_context___spec.html#L33C9"
              },
              "description": [
              ]
            }
          ]
        },
        {
          "label": "Get_Caller_Instance",
          "qualifier": "",
          "line": 187,
          "column": 13,
          "src": "srcs/elab-vhdl_context.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 187,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "   "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "function"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Get_Caller_Instance",
                      "href": "docs/elab__vhdl_context___spec.html#L187C13"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "("
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Syn_Inst",
                      "href": "docs/elab__vhdl_context___spec.html#L187C34"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Synth_Instance_Acc",
                      "href": "docs/elab__vhdl_context___spec.html#L33C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ")"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 188,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "                                "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "return"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Synth_Instance_Acc",
                      "href": "docs/elab__vhdl_context___spec.html#L33C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "Syn_Inst",
              "line": 187,
              "column": 34,
              "type": {
                "label": "Elab.Vhdl_Context.Synth_Instance_Acc",
                "docHref": "docs/elab__vhdl_context___spec.html#L33C9"
              },
              "description": [
              ]
            }
          ]
        },
        {
          "label": "Get_Component_Instance",
          "qualifier": "",
          "line": 175,
          "column": 13,
          "src": "srcs/elab-vhdl_context.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 175,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "   "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "function"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Get_Component_Instance",
                      "href": "docs/elab__vhdl_context___spec.html#L175C13"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 176,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "     "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "("
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Syn_Inst",
                      "href": "docs/elab__vhdl_context___spec.html#L176C7"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Synth_Instance_Acc",
                      "href": "docs/elab__vhdl_context___spec.html#L33C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ")"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "return"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Synth_Instance_Acc",
                      "href": "docs/elab__vhdl_context___spec.html#L33C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "Syn_Inst",
              "line": 176,
              "column": 7,
              "type": {
                "label": "Elab.Vhdl_Context.Synth_Instance_Acc",
                "docHref": "docs/elab__vhdl_context___spec.html#L33C9"
              },
              "description": [
              ]
            }
          ]
        },
        {
          "label": "Get_First_Extra_Instance",
          "qualifier": "",
          "line": 97,
          "column": 13,
          "src": "srcs/elab-vhdl_context.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 97,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "   "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "function"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Get_First_Extra_Instance",
                      "href": "docs/elab__vhdl_context___spec.html#L97C13"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "("
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Inst",
                      "href": "docs/elab__vhdl_context___spec.html#L97C39"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Synth_Instance_Acc",
                      "href": "docs/elab__vhdl_context___spec.html#L33C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ")"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 98,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "                                     "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "return"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Synth_Instance_Acc",
                      "href": "docs/elab__vhdl_context___spec.html#L33C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "Inst",
              "line": 97,
              "column": 39,
              "type": {
                "label": "Elab.Vhdl_Context.Synth_Instance_Acc",
                "docHref": "docs/elab__vhdl_context___spec.html#L33C9"
              },
              "description": [
              ]
            }
          ]
        },
        {
          "label": "Get_Generate_Sub_Instance",
          "qualifier": "",
          "line": 67,
          "column": 13,
          "src": "srcs/elab-vhdl_context.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 67,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "   "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "function"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Get_Generate_Sub_Instance",
                      "href": "docs/elab__vhdl_context___spec.html#L67C13"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 68,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "     "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "("
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Parent",
                      "href": "docs/elab__vhdl_context___spec.html#L68C7"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Synth_Instance_Acc",
                      "href": "docs/elab__vhdl_context___spec.html#L33C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Idx",
                      "href": "docs/elab__vhdl_context___spec.html#L68C36"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Positive"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ")"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "return"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Synth_Instance_Acc",
                      "href": "docs/elab__vhdl_context___spec.html#L33C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "Parent",
              "line": 68,
              "column": 7,
              "type": {
                "label": "Elab.Vhdl_Context.Synth_Instance_Acc",
                "docHref": "docs/elab__vhdl_context___spec.html#L33C9"
              },
              "description": [
              ]
            },
            {
              "label": "Idx",
              "line": 68,
              "column": 36,
              "type": {
                "label": "Positive"
              },
              "description": [
              ]
            }
          ]
        },
        {
          "label": "Get_Instance_By_Scope",
          "qualifier": "",
          "line": 45,
          "column": 13,
          "src": "srcs/elab-vhdl_context.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 45,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "   "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "function"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Get_Instance_By_Scope",
                      "href": "docs/elab__vhdl_context___spec.html#L45C13"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 46,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "     "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "("
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Syn_Inst",
                      "href": "docs/elab__vhdl_context___spec.html#L46C7"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Synth_Instance_Acc",
                      "href": "docs/elab__vhdl_context___spec.html#L33C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Scope",
                      "href": "docs/elab__vhdl_context___spec.html#L46C37"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Sim_Info_Acc",
                      "href": "docs/vhdl__annotations___spec.html#L76C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ")"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 47,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "     "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "return"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Synth_Instance_Acc",
                      "href": "docs/elab__vhdl_context___spec.html#L33C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "Syn_Inst",
              "line": 46,
              "column": 7,
              "type": {
                "label": "Elab.Vhdl_Context.Synth_Instance_Acc",
                "docHref": "docs/elab__vhdl_context___spec.html#L33C9"
              },
              "description": [
              ]
            },
            {
              "label": "Scope",
              "line": 46,
              "column": 37,
              "type": {
                "label": "Vhdl.Annotations.Sim_Info_Acc",
                "docHref": "docs/vhdl__annotations___spec.html#L76C9"
              },
              "description": [
              ]
            }
          ]
        },
        {
          "label": "Get_Instance_Config",
          "qualifier": "",
          "line": 88,
          "column": 13,
          "src": "srcs/elab-vhdl_context.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 88,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "   "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "function"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Get_Instance_Config",
                      "href": "docs/elab__vhdl_context___spec.html#L88C13"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "("
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Inst",
                      "href": "docs/elab__vhdl_context___spec.html#L88C34"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Synth_Instance_Acc",
                      "href": "docs/elab__vhdl_context___spec.html#L33C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ")"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "return"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Node",
                      "href": "docs/vhdl__nodes___spec.html#L7254C12"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "Inst",
              "line": 88,
              "column": 34,
              "type": {
                "label": "Elab.Vhdl_Context.Synth_Instance_Acc",
                "docHref": "docs/elab__vhdl_context___spec.html#L33C9"
              },
              "description": [
              ]
            }
          ]
        },
        {
          "label": "Get_Instance_Const",
          "qualifier": "",
          "line": 77,
          "column": 13,
          "src": "srcs/elab-vhdl_context.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 77,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "   "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "function"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Get_Instance_Const",
                      "href": "docs/elab__vhdl_context___spec.html#L77C13"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "("
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Inst",
                      "href": "docs/elab__vhdl_context___spec.html#L77C33"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Synth_Instance_Acc",
                      "href": "docs/elab__vhdl_context___spec.html#L33C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ")"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "return"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Boolean"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "Inst",
              "line": 77,
              "column": 33,
              "type": {
                "label": "Elab.Vhdl_Context.Synth_Instance_Acc",
                "docHref": "docs/elab__vhdl_context___spec.html#L33C9"
              },
              "description": [
              ]
            }
          ]
        },
        {
          "label": "Get_Instance_Foreign",
          "qualifier": "",
          "line": 91,
          "column": 13,
          "src": "srcs/elab-vhdl_context.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 91,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "   "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "function"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Get_Instance_Foreign",
                      "href": "docs/elab__vhdl_context___spec.html#L91C13"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "("
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Inst",
                      "href": "docs/elab__vhdl_context___spec.html#L91C35"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Synth_Instance_Acc",
                      "href": "docs/elab__vhdl_context___spec.html#L33C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ")"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "return"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Int32",
                      "href": "docs/types___spec.html#L27C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "Inst",
              "line": 91,
              "column": 35,
              "type": {
                "label": "Elab.Vhdl_Context.Synth_Instance_Acc",
                "docHref": "docs/elab__vhdl_context___spec.html#L33C9"
              },
              "description": [
              ]
            }
          ]
        },
        {
          "label": "Get_Instance_Id",
          "qualifier": "",
          "line": 41,
          "column": 13,
          "src": "srcs/elab-vhdl_context.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 41,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "   "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "function"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Get_Instance_Id",
                      "href": "docs/elab__vhdl_context___spec.html#L41C13"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "("
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Inst",
                      "href": "docs/elab__vhdl_context___spec.html#L41C30"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Synth_Instance_Acc",
                      "href": "docs/elab__vhdl_context___spec.html#L33C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ")"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 42,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "                            "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "return"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Instance_Id_Type",
                      "href": "docs/elab__vhdl_context___spec.html#L38C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "Inst",
              "line": 41,
              "column": 30,
              "type": {
                "label": "Elab.Vhdl_Context.Synth_Instance_Acc",
                "docHref": "docs/elab__vhdl_context___spec.html#L33C9"
              },
              "description": [
              ]
            }
          ]
        },
        {
          "label": "Get_Instance_Parent",
          "qualifier": "",
          "line": 84,
          "column": 13,
          "src": "srcs/elab-vhdl_context.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 84,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "   "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "function"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Get_Instance_Parent",
                      "href": "docs/elab__vhdl_context___spec.html#L84C13"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "("
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Inst",
                      "href": "docs/elab__vhdl_context___spec.html#L84C34"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Synth_Instance_Acc",
                      "href": "docs/elab__vhdl_context___spec.html#L33C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ")"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 85,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "                                "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "return"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Synth_Instance_Acc",
                      "href": "docs/elab__vhdl_context___spec.html#L33C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                }
              ]
            },
            {
              "kind": "paragraph",
              "children": [
                {
                  "kind": "span",
                  "text": "Get parent_instance.\n"
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "Inst",
              "line": 84,
              "column": 34,
              "type": {
                "label": "Elab.Vhdl_Context.Synth_Instance_Acc",
                "docHref": "docs/elab__vhdl_context___spec.html#L33C9"
              },
              "description": [
              ]
            }
          ]
        },
        {
          "label": "Get_Nbr_Signal",
          "qualifier": "",
          "line": 111,
          "column": 13,
          "src": "srcs/elab-vhdl_context.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 111,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "   "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "function"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Get_Nbr_Signal",
                      "href": "docs/elab__vhdl_context___spec.html#L111C13"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "return"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Signal_Index_Type",
                      "href": "docs/elab__vhdl_values___spec.html#L78C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                }
              ]
            },
            {
              "kind": "paragraph",
              "children": [
                {
                  "kind": "span",
                  "text": "Number of created signals.\n"
                }
              ]
            }
          ]
        },
        {
          "label": "Get_Next_Extra_Instance",
          "qualifier": "",
          "line": 99,
          "column": 13,
          "src": "srcs/elab-vhdl_context.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 99,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "   "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "function"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Get_Next_Extra_Instance",
                      "href": "docs/elab__vhdl_context___spec.html#L99C13"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "("
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Inst",
                      "href": "docs/elab__vhdl_context___spec.html#L99C38"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Synth_Instance_Acc",
                      "href": "docs/elab__vhdl_context___spec.html#L33C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ")"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 100,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "                                     "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "return"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Synth_Instance_Acc",
                      "href": "docs/elab__vhdl_context___spec.html#L33C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "Inst",
              "line": 99,
              "column": 38,
              "type": {
                "label": "Elab.Vhdl_Context.Synth_Instance_Acc",
                "docHref": "docs/elab__vhdl_context___spec.html#L33C9"
              },
              "description": [
              ]
            }
          ]
        },
        {
          "label": "Get_Package_Object",
          "qualifier": "",
          "line": 166,
          "column": 13,
          "src": "srcs/elab-vhdl_context.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 166,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "   "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "function"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Get_Package_Object",
                      "href": "docs/elab__vhdl_context___spec.html#L166C13"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 167,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "     "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "("
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Syn_Inst",
                      "href": "docs/elab__vhdl_context___spec.html#L167C7"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Synth_Instance_Acc",
                      "href": "docs/elab__vhdl_context___spec.html#L33C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Pkg",
                      "href": "docs/elab__vhdl_context___spec.html#L167C38"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Node",
                      "href": "docs/vhdl__nodes___spec.html#L7254C12"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ")"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "return"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Synth_Instance_Acc",
                      "href": "docs/elab__vhdl_context___spec.html#L33C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "Syn_Inst",
              "line": 167,
              "column": 7,
              "type": {
                "label": "Elab.Vhdl_Context.Synth_Instance_Acc",
                "docHref": "docs/elab__vhdl_context___spec.html#L33C9"
              },
              "description": [
              ]
            },
            {
              "label": "Pkg",
              "line": 167,
              "column": 38,
              "type": {
                "label": "Vhdl.Nodes.Node",
                "docHref": "docs/vhdl__nodes___spec.html#L7254C12"
              },
              "description": [
              ]
            }
          ]
        },
        {
          "label": "Get_Parent_Scope",
          "qualifier": "",
          "line": 179,
          "column": 13,
          "src": "srcs/elab-vhdl_context.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 179,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "   "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "function"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Get_Parent_Scope",
                      "href": "docs/elab__vhdl_context___spec.html#L179C13"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "("
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Blk",
                      "href": "docs/elab__vhdl_context___spec.html#L179C31"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Node",
                      "href": "docs/vhdl__nodes___spec.html#L7254C12"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ")"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "return"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Sim_Info_Acc",
                      "href": "docs/vhdl__annotations___spec.html#L76C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                }
              ]
            },
            {
              "kind": "paragraph",
              "children": [
                {
                  "kind": "span",
                  "text": "Return the scope of the parent of BLK.  Deals with architecture bodies.\n"
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "Blk",
              "line": 179,
              "column": 31,
              "type": {
                "label": "Vhdl.Nodes.Node",
                "docHref": "docs/vhdl__nodes___spec.html#L7254C12"
              },
              "description": [
              ]
            }
          ]
        },
        {
          "label": "Get_Source_Scope",
          "qualifier": "",
          "line": 81,
          "column": 13,
          "src": "srcs/elab-vhdl_context.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 81,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "   "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "function"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Get_Source_Scope",
                      "href": "docs/elab__vhdl_context___spec.html#L81C13"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "("
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Inst",
                      "href": "docs/elab__vhdl_context___spec.html#L81C31"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Synth_Instance_Acc",
                      "href": "docs/elab__vhdl_context___spec.html#L33C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ")"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "return"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Node",
                      "href": "docs/vhdl__nodes___spec.html#L7254C12"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                }
              ]
            },
            {
              "kind": "paragraph",
              "children": [
                {
                  "kind": "span",
                  "text": "Get the corresponding source for the scope of the instance.\n"
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "Inst",
              "line": 81,
              "column": 31,
              "type": {
                "label": "Elab.Vhdl_Context.Synth_Instance_Acc",
                "docHref": "docs/elab__vhdl_context___spec.html#L33C9"
              },
              "description": [
              ]
            }
          ]
        },
        {
          "label": "Get_Sub_Instance",
          "qualifier": "",
          "line": 173,
          "column": 13,
          "src": "srcs/elab-vhdl_context.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 173,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "   "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "function"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Get_Sub_Instance",
                      "href": "docs/elab__vhdl_context___spec.html#L173C13"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 174,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "     "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "("
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Syn_Inst",
                      "href": "docs/elab__vhdl_context___spec.html#L174C7"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Synth_Instance_Acc",
                      "href": "docs/elab__vhdl_context___spec.html#L33C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Stmt",
                      "href": "docs/elab__vhdl_context___spec.html#L174C38"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Node",
                      "href": "docs/vhdl__nodes___spec.html#L7254C12"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ")"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "return"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Synth_Instance_Acc",
                      "href": "docs/elab__vhdl_context___spec.html#L33C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "Syn_Inst",
              "line": 174,
              "column": 7,
              "type": {
                "label": "Elab.Vhdl_Context.Synth_Instance_Acc",
                "docHref": "docs/elab__vhdl_context___spec.html#L33C9"
              },
              "description": [
              ]
            },
            {
              "label": "Stmt",
              "line": 174,
              "column": 38,
              "type": {
                "label": "Vhdl.Nodes.Node",
                "docHref": "docs/vhdl__nodes___spec.html#L7254C12"
              },
              "description": [
              ]
            }
          ]
        },
        {
          "label": "Get_Subtype_Object",
          "qualifier": "",
          "line": 170,
          "column": 13,
          "src": "srcs/elab-vhdl_context.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 170,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "   "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "function"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Get_Subtype_Object",
                      "href": "docs/elab__vhdl_context___spec.html#L170C13"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 171,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "     "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "("
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Syn_Inst",
                      "href": "docs/elab__vhdl_context___spec.html#L171C7"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Synth_Instance_Acc",
                      "href": "docs/elab__vhdl_context___spec.html#L33C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Decl",
                      "href": "docs/elab__vhdl_context___spec.html#L171C38"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Node",
                      "href": "docs/vhdl__nodes___spec.html#L7254C12"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ")"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "return"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Type_Acc",
                      "href": "docs/elab__vhdl_objtypes___spec.html#L101C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                }
              ]
            },
            {
              "kind": "paragraph",
              "children": [
                {
                  "kind": "span",
                  "text": "Return the type for DECL (a subtype indication).\n"
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "Syn_Inst",
              "line": 171,
              "column": 7,
              "type": {
                "label": "Elab.Vhdl_Context.Synth_Instance_Acc",
                "docHref": "docs/elab__vhdl_context___spec.html#L33C9"
              },
              "description": [
              ]
            },
            {
              "label": "Decl",
              "line": 171,
              "column": 38,
              "type": {
                "label": "Vhdl.Nodes.Node",
                "docHref": "docs/vhdl__nodes___spec.html#L7254C12"
              },
              "description": [
              ]
            }
          ]
        },
        {
          "label": "Get_Value",
          "qualifier": "",
          "line": 163,
          "column": 13,
          "src": "srcs/elab-vhdl_context.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 163,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "   "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "function"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Get_Value",
                      "href": "docs/elab__vhdl_context___spec.html#L163C13"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "("
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Syn_Inst",
                      "href": "docs/elab__vhdl_context___spec.html#L163C24"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Synth_Instance_Acc",
                      "href": "docs/elab__vhdl_context___spec.html#L33C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Obj",
                      "href": "docs/elab__vhdl_context___spec.html#L163C55"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Node",
                      "href": "docs/vhdl__nodes___spec.html#L7254C12"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ")"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 164,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "                      "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "return"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Valtyp",
                      "href": "docs/elab__vhdl_values___spec.html#L121C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                }
              ]
            },
            {
              "kind": "paragraph",
              "children": [
                {
                  "kind": "span",
                  "text": "Get the value of OBJ.\n"
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "Syn_Inst",
              "line": 163,
              "column": 24,
              "type": {
                "label": "Elab.Vhdl_Context.Synth_Instance_Acc",
                "docHref": "docs/elab__vhdl_context___spec.html#L33C9"
              },
              "description": [
              ]
            },
            {
              "label": "Obj",
              "line": 163,
              "column": 55,
              "type": {
                "label": "Vhdl.Nodes.Node",
                "docHref": "docs/vhdl__nodes___spec.html#L7254C12"
              },
              "description": [
              ]
            }
          ]
        },
        {
          "label": "Is_Error",
          "qualifier": "",
          "line": 72,
          "column": 13,
          "src": "srcs/elab-vhdl_context.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 72,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "   "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "function"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Is_Error",
                      "href": "docs/elab__vhdl_context___spec.html#L72C13"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "("
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Inst",
                      "href": "docs/elab__vhdl_context___spec.html#L72C23"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Synth_Instance_Acc",
                      "href": "docs/elab__vhdl_context___spec.html#L33C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ")"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "return"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Boolean"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "Inst",
              "line": 72,
              "column": 23,
              "type": {
                "label": "Elab.Vhdl_Context.Synth_Instance_Acc",
                "docHref": "docs/elab__vhdl_context___spec.html#L33C9"
              },
              "description": [
              ]
            }
          ]
        },
        {
          "label": "Iterate_Top_Level",
          "qualifier": "",
          "line": 194,
          "column": 14,
          "src": "srcs/elab-vhdl_context.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 194,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "   "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "procedure"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Iterate_Top_Level",
                      "href": "docs/elab__vhdl_context___spec.html#L194C14"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "("
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "It",
                      "href": "docs/elab__vhdl_context___spec.html#L194C33"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "in"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "out"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Iterator_Top_Level_Type",
                      "href": "docs/elab__vhdl_context___spec.html#L274C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 195,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "                                "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Res",
                      "href": "docs/elab__vhdl_context___spec.html#L195C33"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "out"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Synth_Instance_Acc",
                      "href": "docs/elab__vhdl_context___spec.html#L33C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ")"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "It",
              "line": 194,
              "column": 33,
              "type": {
                "label": "Elab.Vhdl_Context.Iterator_Top_Level_Type",
                "docHref": "docs/elab__vhdl_context___spec.html#L191C9"
              },
              "description": [
              ]
            },
            {
              "label": "Res",
              "line": 195,
              "column": 33,
              "type": {
                "label": "Elab.Vhdl_Context.Synth_Instance_Acc",
                "docHref": "docs/elab__vhdl_context___spec.html#L33C9"
              },
              "description": [
              ]
            }
          ]
        },
        {
          "label": "Make_Elab_Generate_Instance",
          "qualifier": "",
          "line": 63,
          "column": 13,
          "src": "srcs/elab-vhdl_context.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 63,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "   "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "function"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Make_Elab_Generate_Instance",
                      "href": "docs/elab__vhdl_context___spec.html#L63C13"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 64,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "     "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "("
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Parent",
                      "href": "docs/elab__vhdl_context___spec.html#L64C7"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Synth_Instance_Acc",
                      "href": "docs/elab__vhdl_context___spec.html#L33C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Blk",
                      "href": "docs/elab__vhdl_context___spec.html#L64C36"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Node",
                      "href": "docs/vhdl__nodes___spec.html#L7254C12"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Config",
                      "href": "docs/elab__vhdl_context___spec.html#L64C48"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Node",
                      "href": "docs/vhdl__nodes___spec.html#L7254C12"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Len",
                      "href": "docs/elab__vhdl_context___spec.html#L64C63"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Natural"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ")"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 65,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "     "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "return"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Synth_Instance_Acc",
                      "href": "docs/elab__vhdl_context___spec.html#L33C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "Parent",
              "line": 64,
              "column": 7,
              "type": {
                "label": "Elab.Vhdl_Context.Synth_Instance_Acc",
                "docHref": "docs/elab__vhdl_context___spec.html#L33C9"
              },
              "description": [
              ]
            },
            {
              "label": "Blk",
              "line": 64,
              "column": 36,
              "type": {
                "label": "Vhdl.Nodes.Node",
                "docHref": "docs/vhdl__nodes___spec.html#L7254C12"
              },
              "description": [
              ]
            },
            {
              "label": "Config",
              "line": 64,
              "column": 48,
              "type": {
                "label": "Vhdl.Nodes.Node",
                "docHref": "docs/vhdl__nodes___spec.html#L7254C12"
              },
              "description": [
              ]
            },
            {
              "label": "Len",
              "line": 64,
              "column": 63,
              "type": {
                "label": "Natural"
              },
              "description": [
              ]
            }
          ]
        },
        {
          "label": "Make_Elab_Instance",
          "qualifier": "",
          "line": 57,
          "column": 13,
          "src": "srcs/elab-vhdl_context.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 57,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "   "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "function"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Make_Elab_Instance",
                      "href": "docs/elab__vhdl_context___spec.html#L57C13"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 58,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "     "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "("
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Parent",
                      "href": "docs/elab__vhdl_context___spec.html#L58C7"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Synth_Instance_Acc",
                      "href": "docs/elab__vhdl_context___spec.html#L33C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Blk",
                      "href": "docs/elab__vhdl_context___spec.html#L58C36"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Node",
                      "href": "docs/vhdl__nodes___spec.html#L7254C12"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Config",
                      "href": "docs/elab__vhdl_context___spec.html#L58C48"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Node",
                      "href": "docs/vhdl__nodes___spec.html#L7254C12"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ")"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 59,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "     "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "return"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Synth_Instance_Acc",
                      "href": "docs/elab__vhdl_context___spec.html#L33C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                }
              ]
            },
            {
              "kind": "paragraph",
              "children": [
                {
                  "kind": "span",
                  "text": "Create and free the corresponding synth instance.\n"
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "Parent",
              "line": 58,
              "column": 7,
              "type": {
                "label": "Elab.Vhdl_Context.Synth_Instance_Acc",
                "docHref": "docs/elab__vhdl_context___spec.html#L33C9"
              },
              "description": [
              ]
            },
            {
              "label": "Blk",
              "line": 58,
              "column": 36,
              "type": {
                "label": "Vhdl.Nodes.Node",
                "docHref": "docs/vhdl__nodes___spec.html#L7254C12"
              },
              "description": [
              ]
            },
            {
              "label": "Config",
              "line": 58,
              "column": 48,
              "type": {
                "label": "Vhdl.Nodes.Node",
                "docHref": "docs/vhdl__nodes___spec.html#L7254C12"
              },
              "description": [
              ]
            }
          ]
        },
        {
          "label": "Make_Root_Instance",
          "qualifier": "",
          "line": 51,
          "column": 14,
          "src": "srcs/elab-vhdl_context.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 51,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "   "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "procedure"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Make_Root_Instance",
                      "href": "docs/elab__vhdl_context___spec.html#L51C14"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                }
              ]
            },
            {
              "kind": "paragraph",
              "children": [
                {
                  "kind": "span",
                  "text": "Create the root instance (which contains the packages).\n"
                },
                {
                  "kind": "span",
                  "text": "Assign ROOT_INSTANCE.\n"
                }
              ]
            }
          ]
        },
        {
          "label": "Mutate_Object",
          "qualifier": "",
          "line": 146,
          "column": 14,
          "src": "srcs/elab-vhdl_context.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 146,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "   "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "procedure"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Mutate_Object",
                      "href": "docs/elab__vhdl_context___spec.html#L146C14"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 147,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "     "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "("
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Syn_Inst",
                      "href": "docs/elab__vhdl_context___spec.html#L147C7"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Synth_Instance_Acc",
                      "href": "docs/elab__vhdl_context___spec.html#L33C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Decl",
                      "href": "docs/elab__vhdl_context___spec.html#L147C38"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Node",
                      "href": "docs/vhdl__nodes___spec.html#L7254C12"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Vt",
                      "href": "docs/elab__vhdl_context___spec.html#L147C51"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Valtyp",
                      "href": "docs/elab__vhdl_values___spec.html#L121C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ")"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "Syn_Inst",
              "line": 147,
              "column": 7,
              "type": {
                "label": "Elab.Vhdl_Context.Synth_Instance_Acc",
                "docHref": "docs/elab__vhdl_context___spec.html#L33C9"
              },
              "description": [
              ]
            },
            {
              "label": "Decl",
              "line": 147,
              "column": 38,
              "type": {
                "label": "Vhdl.Nodes.Node",
                "docHref": "docs/vhdl__nodes___spec.html#L7254C12"
              },
              "description": [
              ]
            },
            {
              "label": "Vt",
              "line": 147,
              "column": 51,
              "type": {
                "label": "Elab.Vhdl_Values.Valtyp",
                "docHref": "docs/elab__vhdl_values___spec.html#L121C9"
              },
              "description": [
              ]
            }
          ]
        },
        {
          "label": "Replace_Signal",
          "qualifier": "",
          "line": 144,
          "column": 14,
          "src": "srcs/elab-vhdl_context.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 144,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "   "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "procedure"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Replace_Signal",
                      "href": "docs/elab__vhdl_context___spec.html#L144C14"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 145,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "     "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "("
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Syn_Inst",
                      "href": "docs/elab__vhdl_context___spec.html#L145C7"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Synth_Instance_Acc",
                      "href": "docs/elab__vhdl_context___spec.html#L33C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Decl",
                      "href": "docs/elab__vhdl_context___spec.html#L145C38"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Node",
                      "href": "docs/vhdl__nodes___spec.html#L7254C12"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Vt",
                      "href": "docs/elab__vhdl_context___spec.html#L145C51"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Valtyp",
                      "href": "docs/elab__vhdl_values___spec.html#L121C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ")"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "Syn_Inst",
              "line": 145,
              "column": 7,
              "type": {
                "label": "Elab.Vhdl_Context.Synth_Instance_Acc",
                "docHref": "docs/elab__vhdl_context___spec.html#L33C9"
              },
              "description": [
              ]
            },
            {
              "label": "Decl",
              "line": 145,
              "column": 38,
              "type": {
                "label": "Vhdl.Nodes.Node",
                "docHref": "docs/vhdl__nodes___spec.html#L7254C12"
              },
              "description": [
              ]
            },
            {
              "label": "Vt",
              "line": 145,
              "column": 51,
              "type": {
                "label": "Elab.Vhdl_Values.Valtyp",
                "docHref": "docs/elab__vhdl_values___spec.html#L121C9"
              },
              "description": [
              ]
            }
          ]
        },
        {
          "label": "Set_Caller_Instance",
          "qualifier": "",
          "line": 185,
          "column": 14,
          "src": "srcs/elab-vhdl_context.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 185,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "   "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "procedure"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Set_Caller_Instance",
                      "href": "docs/elab__vhdl_context___spec.html#L185C14"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "("
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Syn_Inst",
                      "href": "docs/elab__vhdl_context___spec.html#L185C35"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Synth_Instance_Acc",
                      "href": "docs/elab__vhdl_context___spec.html#L33C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 186,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "                                  "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Caller",
                      "href": "docs/elab__vhdl_context___spec.html#L186C35"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Synth_Instance_Acc",
                      "href": "docs/elab__vhdl_context___spec.html#L33C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ")"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                }
              ]
            },
            {
              "kind": "paragraph",
              "children": [
                {
                  "kind": "span",
                  "text": "For debugging purpose: update the caller of an instance.\n"
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "Syn_Inst",
              "line": 185,
              "column": 35,
              "type": {
                "label": "Elab.Vhdl_Context.Synth_Instance_Acc",
                "docHref": "docs/elab__vhdl_context___spec.html#L33C9"
              },
              "description": [
              ]
            },
            {
              "label": "Caller",
              "line": 186,
              "column": 35,
              "type": {
                "label": "Elab.Vhdl_Context.Synth_Instance_Acc",
                "docHref": "docs/elab__vhdl_context___spec.html#L33C9"
              },
              "description": [
              ]
            }
          ]
        },
        {
          "label": "Set_Error",
          "qualifier": "",
          "line": 75,
          "column": 14,
          "src": "srcs/elab-vhdl_context.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 75,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "   "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "procedure"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Set_Error",
                      "href": "docs/elab__vhdl_context___spec.html#L75C14"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "("
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Inst",
                      "href": "docs/elab__vhdl_context___spec.html#L75C25"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Synth_Instance_Acc",
                      "href": "docs/elab__vhdl_context___spec.html#L33C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ")"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "Inst",
              "line": 75,
              "column": 25,
              "type": {
                "label": "Elab.Vhdl_Context.Synth_Instance_Acc",
                "docHref": "docs/elab__vhdl_context___spec.html#L33C9"
              },
              "description": [
              ]
            }
          ]
        },
        {
          "label": "Set_Generate_Sub_Instance",
          "qualifier": "",
          "line": 69,
          "column": 14,
          "src": "srcs/elab-vhdl_context.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 69,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "   "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "procedure"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Set_Generate_Sub_Instance",
                      "href": "docs/elab__vhdl_context___spec.html#L69C14"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 70,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "     "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "("
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Parent",
                      "href": "docs/elab__vhdl_context___spec.html#L70C7"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Synth_Instance_Acc",
                      "href": "docs/elab__vhdl_context___spec.html#L33C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Idx",
                      "href": "docs/elab__vhdl_context___spec.html#L70C36"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Positive"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Child",
                      "href": "docs/elab__vhdl_context___spec.html#L70C52"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Synth_Instance_Acc",
                      "href": "docs/elab__vhdl_context___spec.html#L33C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ")"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "Parent",
              "line": 70,
              "column": 7,
              "type": {
                "label": "Elab.Vhdl_Context.Synth_Instance_Acc",
                "docHref": "docs/elab__vhdl_context___spec.html#L33C9"
              },
              "description": [
              ]
            },
            {
              "label": "Idx",
              "line": 70,
              "column": 36,
              "type": {
                "label": "Positive"
              },
              "description": [
              ]
            },
            {
              "label": "Child",
              "line": 70,
              "column": 52,
              "type": {
                "label": "Elab.Vhdl_Context.Synth_Instance_Acc",
                "docHref": "docs/elab__vhdl_context___spec.html#L33C9"
              },
              "description": [
              ]
            }
          ]
        },
        {
          "label": "Set_Instance_Config",
          "qualifier": "",
          "line": 87,
          "column": 14,
          "src": "srcs/elab-vhdl_context.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 87,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "   "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "procedure"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Set_Instance_Config",
                      "href": "docs/elab__vhdl_context___spec.html#L87C14"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "("
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Inst",
                      "href": "docs/elab__vhdl_context___spec.html#L87C35"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Synth_Instance_Acc",
                      "href": "docs/elab__vhdl_context___spec.html#L33C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Config",
                      "href": "docs/elab__vhdl_context___spec.html#L87C62"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Node",
                      "href": "docs/vhdl__nodes___spec.html#L7254C12"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ")"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "Inst",
              "line": 87,
              "column": 35,
              "type": {
                "label": "Elab.Vhdl_Context.Synth_Instance_Acc",
                "docHref": "docs/elab__vhdl_context___spec.html#L33C9"
              },
              "description": [
              ]
            },
            {
              "label": "Config",
              "line": 87,
              "column": 62,
              "type": {
                "label": "Vhdl.Nodes.Node",
                "docHref": "docs/vhdl__nodes___spec.html#L7254C12"
              },
              "description": [
              ]
            }
          ]
        },
        {
          "label": "Set_Instance_Const",
          "qualifier": "",
          "line": 78,
          "column": 14,
          "src": "srcs/elab-vhdl_context.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 78,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "   "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "procedure"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Set_Instance_Const",
                      "href": "docs/elab__vhdl_context___spec.html#L78C14"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "("
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Inst",
                      "href": "docs/elab__vhdl_context___spec.html#L78C34"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Synth_Instance_Acc",
                      "href": "docs/elab__vhdl_context___spec.html#L33C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Val",
                      "href": "docs/elab__vhdl_context___spec.html#L78C61"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Boolean"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ")"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "Inst",
              "line": 78,
              "column": 34,
              "type": {
                "label": "Elab.Vhdl_Context.Synth_Instance_Acc",
                "docHref": "docs/elab__vhdl_context___spec.html#L33C9"
              },
              "description": [
              ]
            },
            {
              "label": "Val",
              "line": 78,
              "column": 61,
              "type": {
                "label": "Boolean"
              },
              "description": [
              ]
            }
          ]
        },
        {
          "label": "Set_Instance_Foreign",
          "qualifier": "",
          "line": 90,
          "column": 14,
          "src": "srcs/elab-vhdl_context.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 90,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "   "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "procedure"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Set_Instance_Foreign",
                      "href": "docs/elab__vhdl_context___spec.html#L90C14"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "("
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Inst",
                      "href": "docs/elab__vhdl_context___spec.html#L90C36"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Synth_Instance_Acc",
                      "href": "docs/elab__vhdl_context___spec.html#L33C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "N",
                      "href": "docs/elab__vhdl_context___spec.html#L90C63"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Int32",
                      "href": "docs/types___spec.html#L27C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ")"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "Inst",
              "line": 90,
              "column": 36,
              "type": {
                "label": "Elab.Vhdl_Context.Synth_Instance_Acc",
                "docHref": "docs/elab__vhdl_context___spec.html#L33C9"
              },
              "description": [
              ]
            },
            {
              "label": "N",
              "line": 90,
              "column": 63,
              "type": {
                "label": "Types.Int32",
                "docHref": "docs/types___spec.html#L27C9"
              },
              "description": [
              ]
            }
          ]
        },
        {
          "label": "Set_Uninstantiated_Scope",
          "qualifier": "",
          "line": 181,
          "column": 14,
          "src": "srcs/elab-vhdl_context.ads.html",
          "summary": [
          ],
          "description": [
            {
              "kind": "code",
              "children": [
                {
                  "kind": "line",
                  "number": 181,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "   "
                    },
                    {
                      "kind": "span",
                      "cssClass": "keyword",
                      "text": "procedure"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Set_Uninstantiated_Scope",
                      "href": "docs/elab__vhdl_context___spec.html#L181C14"
                    }
                  ]
                },
                {
                  "kind": "line",
                  "number": 182,
                  "children": [
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": "     "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "("
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Syn_Inst",
                      "href": "docs/elab__vhdl_context___spec.html#L182C7"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Synth_Instance_Acc",
                      "href": "docs/elab__vhdl_context___spec.html#L33C9"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Bod",
                      "href": "docs/elab__vhdl_context___spec.html#L182C38"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ":"
                    },
                    {
                      "kind": "span",
                      "cssClass": "text",
                      "text": " "
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": "Node",
                      "href": "docs/vhdl__nodes___spec.html#L7254C12"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ")"
                    },
                    {
                      "kind": "span",
                      "cssClass": "identifier",
                      "text": ";"
                    }
                  ]
                }
              ]
            }
          ],
          "parameters": [
            {
              "label": "Syn_Inst",
              "line": 182,
              "column": 7,
              "type": {
                "label": "Elab.Vhdl_Context.Synth_Instance_Acc",
                "docHref": "docs/elab__vhdl_context___spec.html#L33C9"
              },
              "description": [
              ]
            },
            {
              "label": "Bod",
              "line": 182,
              "column": 38,
              "type": {
                "label": "Vhdl.Nodes.Node",
                "docHref": "docs/vhdl__nodes___spec.html#L7254C12"
              },
              "description": [
              ]
            }
          ]
        }
      ],
      "label": "Subprograms"
    }
  ]
};