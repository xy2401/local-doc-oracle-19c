define(
{
    "toc":[
        {
            "heading":"Table of Contents",
            "topics":[
                {
                    "title":"List of Figures",
                    "href":"lof.html"
                },
                {
                    "title":"List of Tables",
                    "href":"lot.html"
                },
                {
                    "title":"Title and Copyright Information",
                    "href":"index.html"
                },
                {
                    "title":"Preface",
                    "href":"preface.html#GUID-F2764C38-818F-400A-B3BF-57D4D09C17B1",
                    "topics":[
                        {
                            "title":"Audience",
                            "href":"preface.html#GUID-ACC58EF3-D83C-4586-9480-1650B3A615BB"
                        },
                        {
                            "title":"Documentation Accessibility",
                            "href":"preface.html#GUID-E409CC44-9A8F-4043-82C8-6B95CD939296"
                        },
                        {
                            "title":"Related Documents",
                            "href":"preface.html#GUID-3480A5AE-2B0B-4C0D-B4D2-E06C8527CEAE"
                        },
                        {
                            "title":"Conventions",
                            "href":"preface.html#GUID-52A072B4-EFE2-4BD1-93F7-C41CC6E3D465"
                        }
                    ]
                },
                {
                    "title":"Changes in This Release for Oracle Spatial and Graph Property Graph Developer's Guide",
                    "href":"changes-in-this-release.html#GUID-75309029-ADEB-4C67-877E-F5639F1896FF",
                    "topics":[
                        {
                            "title":"Changes in Oracle Database Release 19c for Property Graph Support",
                            "href":"changes-in-this-release.html#GUID-52343A8B-71B3-4B6C-AA0B-4AEE7F726C37",
                            "topics":[
                                {
                                    "title":"Update to TinkerPop 3",
                                    "href":"changes-in-this-release.html#GUID-9E729275-5684-4B16-B72D-618DB1183671"
                                },
                                {
                                    "title":"New In-Memory Analyst REST API",
                                    "href":"changes-in-this-release.html#GUID-1010B7AB-7998-484B-B0AE-DFCCBBB6140B"
                                },
                                {
                                    "title":"New In-Memory Analyst APIs for Release 19c",
                                    "href":"changes-in-this-release.html#GUID-1D81CAD6-B910-48D9-9AC8-4BBBFA353B1E",
                                    "topics":[
                                        {
                                            "title":"Creating Vertex/Edge Sets from a PGQL Result Set",
                                            "href":"changes-in-this-release.html#GUID-4D404319-5B1E-4B42-A133-301775AA81E2"
                                        },
                                        {
                                            "title":"Sharing Graphs by Name",
                                            "href":"changes-in-this-release.html#GUID-FB9172B3-CE0F-4CCB-B03D-3075BAE6CB76"
                                        },
                                        {
                                            "title":"New In-Memory Analyst Built-In Algorithms",
                                            "href":"changes-in-this-release.html#GUID-01AD6D73-A342-4FF4-B686-0093D690FB7F"
                                        }
                                    ]
                                },
                                {
                                    "title":"Additions to PGQL Support in In-Memory Analyst for Release 19c",
                                    "href":"changes-in-this-release.html#GUID-E2DBBBD4-7952-4006-8F84-9E8D9AF0AB3A",
                                    "topics":[
                                        {
                                            "title":"Using EXISTS and NOT EXISTS Subqueries",
                                            "href":"changes-in-this-release.html#GUID-B2DCE8D1-C4D8-4A60-81B4-6133410B3809"
                                        },
                                        {
                                            "title":"Using Subqueries Inside the PATH Clause",
                                            "href":"changes-in-this-release.html#GUID-15E23011-9E4D-4633-9A1E-D16202F783C9"
                                        },
                                        {
                                            "title":"Using Scalar Subqueries",
                                            "href":"changes-in-this-release.html#GUID-BB8EC42C-B5CF-4F41-AC48-7D89502CB6DE"
                                        },
                                        {
                                            "title":"Other New and Changed PGQL Features for Release 19c",
                                            "href":"changes-in-this-release.html#GUID-BA76A8ED-F380-4564-A1C2-E43FED76C152"
                                        }
                                    ]
                                },
                                {
                                    "title":"Deprecation of Two-Table Support",
                                    "href":"changes-in-this-release.html#GUID-B275660D-75CC-420D-B98D-0FC86B9097BE"
                                },
                                {
                                    "title":"Deprecation of OraclePgqlResultSet",
                                    "href":"changes-in-this-release.html#GUID-C5400A7E-7F5A-4093-AE1C-BB2365CF0677"
                                }
                            ]
                        }
                    ]
                },
                {
                    "title":"<span class=\"secnum\">1 </span> Spatial and Graph Property Graph Support Overview",
                    "href":"property-graph-overview-spgdg.html#GUID-CCF6BB1E-3C8F-4746-A938-BA3E6EDC9541",
                    "topics":[
                        {
                            "title":"<span class=\"secnum\">1.1 </span> About Property Graph Support",
                            "href":"property-graph-overview-spgdg.html#GUID-24F531CA-9B4F-42A4-99A3-0121DA5421BB"
                        },
                        {
                            "title":"<span class=\"secnum\">1.2 </span> Property Graph Prerequisites",
                            "href":"property-graph-overview-spgdg.html#GUID-FF149F69-574D-43B8-B888-4CCD019DAE56"
                        },
                        {
                            "title":"<span class=\"secnum\">1.3 </span> Property Graph Features",
                            "href":"property-graph-overview-spgdg.html#GUID-2CC5C368-685A-4E99-A37E-A40DF213C339",
                            "topics":[
                                {
                                    "title":"<span class=\"secnum\">1.3.1 </span> Property Graph Sizing Recommendations",
                                    "href":"property-graph-overview-spgdg.html#GUID-BED893F6-A786-4FAF-AABE-10617FB466F0"
                                }
                            ]
                        },
                        {
                            "title":"<span class=\"secnum\">1.4 </span> Spatial Support in Property Graphs",
                            "href":"property-graph-overview-spgdg.html#GUID-0611C729-C1D6-441C-A477-5A02F2D65527",
                            "topics":[
                                {
                                    "title":"<span class=\"secnum\">1.4.1 </span> Representing Spatial Data in a Property Graph",
                                    "href":"property-graph-overview-spgdg.html#GUID-5411672D-89D0-4829-AEB6-25232A12E897"
                                },
                                {
                                    "title":"<span class=\"secnum\">1.4.2 </span> Creating a Spatial Index on Property Graph Data",
                                    "href":"property-graph-overview-spgdg.html#GUID-343F4472-EE93-40C7-A78A-1C8B96D9B47A"
                                },
                                {
                                    "title":"<span class=\"secnum\">1.4.3 </span> Querying Spatial Data in a Property Graph",
                                    "href":"property-graph-overview-spgdg.html#GUID-00843648-F8C3-40B2-885E-A58B36092240"
                                }
                            ]
                        }
                    ]
                },
                {
                    "title":"<span class=\"secnum\">2 </span> Using Property Graphs in an Oracle Database Environment",
                    "href":"using-property-graphs-oracle-database.html#GUID-4B5AF258-79BE-418D-84FF-9B8A692B8604",
                    "topics":[
                        {
                            "title":"<span class=\"secnum\">2.1 </span> About Property Graphs",
                            "href":"using-property-graphs-oracle-database.html#GUID-E4951F06-3B5F-4B82-8B23-7D4F629DE808",
                            "topics":[
                                {
                                    "title":"<span class=\"secnum\">2.1.1 </span> What Are Property Graphs?",
                                    "href":"using-property-graphs-oracle-database.html#GUID-9BA44355-E97D-4E7A-81AA-269873E506B2"
                                },
                                {
                                    "title":"<span class=\"secnum\">2.1.2 </span> What Is Oracle Database Support for Property Graphs?",
                                    "href":"using-property-graphs-oracle-database.html#GUID-D76CD113-5B02-417A-A91A-7063BC395C08",
                                    "topics":[
                                        {
                                            "title":"<span class=\"secnum\">2.1.2.1 </span> In-Memory Analyst",
                                            "href":"using-property-graphs-oracle-database.html#GUID-EA9A6C3D-0946-41A5-BB79-A5118BF5AA1D"
                                        },
                                        {
                                            "title":"<span class=\"secnum\">2.1.2.2 </span> Data Access Layer",
                                            "href":"using-property-graphs-oracle-database.html#GUID-69E5D72E-2EA2-4B6E-B52E-C397F820355A"
                                        },
                                        {
                                            "title":"<span class=\"secnum\">2.1.2.3 </span> Storage Management",
                                            "href":"using-property-graphs-oracle-database.html#GUID-F0741F29-0FE0-472F-886A-096B5FC17E1C"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "title":"<span class=\"secnum\">2.2 </span> About Property Graph Data Formats",
                            "href":"using-property-graphs-oracle-database.html#GUID-B6C28C47-656F-4193-B70E-D6EC555F9D24",
                            "topics":[
                                {
                                    "title":"<span class=\"secnum\">2.2.1 </span> GraphML Data Format",
                                    "href":"using-property-graphs-oracle-database.html#GUID-D85BDA74-F0E3-4590-874E-DEBFD95CE30B"
                                },
                                {
                                    "title":"<span class=\"secnum\">2.2.2 </span> GraphSON Data Format",
                                    "href":"using-property-graphs-oracle-database.html#GUID-8F01B553-22F0-429E-9018-A1C6F3655508"
                                },
                                {
                                    "title":"<span class=\"secnum\">2.2.3 </span> GML Data Format",
                                    "href":"using-property-graphs-oracle-database.html#GUID-B6EB163B-C03F-4720-B57F-78ADEB657B13"
                                },
                                {
                                    "title":"<span class=\"secnum\">2.2.4 </span> Oracle Flat File Format",
                                    "href":"using-property-graphs-oracle-database.html#GUID-15A4AE0C-2AF6-459B-A3D5-432434ECAD70"
                                }
                            ]
                        },
                        {
                            "title":"<span class=\"secnum\">2.3 </span> Property Graph Schema Objects for Oracle Database",
                            "href":"using-property-graphs-oracle-database.html#GUID-728A5FBC-998C-4675-9C0A-31C9195B737D",
                            "topics":[
                                {
                                    "title":"<span class=\"secnum\">2.3.1 </span> Default Indexes on Vertex (VT$) and Edge (GE$) Tables",
                                    "href":"using-property-graphs-oracle-database.html#GUID-78D0CA44-DA26-43BC-ABD8-64548544BCA2"
                                },
                                {
                                    "title":"<span class=\"secnum\">2.3.2 </span> Flexibility in the Property Graph Schema",
                                    "href":"using-property-graphs-oracle-database.html#GUID-10626028-5648-4BCB-9992-2E6488C1DA13"
                                }
                            ]
                        },
                        {
                            "title":"<span class=\"secnum\">2.4 </span> Getting Started with Property Graphs",
                            "href":"using-property-graphs-oracle-database.html#GUID-E754CCD1-FB01-4644-A028-FEEA0ED683ED"
                        },
                        {
                            "title":"<span class=\"secnum\">2.5 </span> Using Java APIs for Property Graph Data",
                            "href":"using-property-graphs-oracle-database.html#GUID-734D16D3-E8AA-4097-B644-14D80A4C7958",
                            "topics":[
                                {
                                    "title":"<span class=\"secnum\">2.5.1 </span> Overview of the Java APIs",
                                    "href":"using-property-graphs-oracle-database.html#GUID-85A4E0F7-0C3C-411D-912A-FD4744FADE44",
                                    "topics":[
                                        {
                                            "title":"<span class=\"secnum\">2.5.1.1 </span> Oracle Spatial and Graph Property Graph Java APIs",
                                            "href":"using-property-graphs-oracle-database.html#GUID-42D0F0B5-43A6-47E7-AEA9-B18A6A27D138"
                                        },
                                        {
                                            "title":"<span class=\"secnum\">2.5.1.2 </span> TinkerPop Java APIs",
                                            "href":"using-property-graphs-oracle-database.html#GUID-5EC28F8B-49CA-42FB-A070-823C43BD9328"
                                        },
                                        {
                                            "title":"<span class=\"secnum\">2.5.1.3 </span> Oracle Database Property Graph Java APIs",
                                            "href":"using-property-graphs-oracle-database.html#GUID-7D4751AA-40D6-4B4C-A117-1D639B342E84"
                                        }
                                    ]
                                },
                                {
                                    "title":"<span class=\"secnum\">2.5.2 </span> Parallel Loading of Graph Data",
                                    "href":"using-property-graphs-oracle-database.html#GUID-6212D301-F439-4B4B-A36F-73194D404979",
                                    "topics":[
                                        {
                                            "title":"<span class=\"secnum\">2.5.2.1 </span> JDBC-Based Data Loading",
                                            "href":"using-property-graphs-oracle-database.html#GUID-40B77BBF-9FEC-412A-8A3F-8DB41993E4C7"
                                        },
                                        {
                                            "title":"<span class=\"secnum\">2.5.2.2 </span> External Table-Based Data Loading",
                                            "href":"using-property-graphs-oracle-database.html#GUID-4AB847C3-7EE6-4C18-B4AF-0F885277EBA3"
                                        },
                                        {
                                            "title":"<span class=\"secnum\">2.5.2.3 </span> SQL*Loader-Based Data Loading",
                                            "href":"using-property-graphs-oracle-database.html#GUID-9E4F7C89-A28B-4F54-8132-C6F2F8395A6F"
                                        }
                                    ]
                                },
                                {
                                    "title":"<span class=\"secnum\">2.5.3 </span> Parallel Retrieval of Graph Data",
                                    "href":"using-property-graphs-oracle-database.html#GUID-5CC8B971-DDCD-46CF-86EF-CDFD69E20FDC"
                                },
                                {
                                    "title":"<span class=\"secnum\">2.5.4 </span> Using an Element Filter Callback for Subgraph Extraction",
                                    "href":"using-property-graphs-oracle-database.html#GUID-216595F2-BBA0-4FAB-AC6C-1FDF25D46469"
                                },
                                {
                                    "title":"<span class=\"secnum\">2.5.5 </span> Using Optimization Flags on Reads over Property Graph Data",
                                    "href":"using-property-graphs-oracle-database.html#GUID-D33E2232-BE9C-444D-BC5C-2B4E62CAF2C4"
                                },
                                {
                                    "title":"<span class=\"secnum\">2.5.6 </span> Adding and Removing Attributes of a Property Graph Subgraph",
                                    "href":"using-property-graphs-oracle-database.html#GUID-991EA4C2-1DC0-413F-BF3C-D7B71537AA36"
                                },
                                {
                                    "title":"<span class=\"secnum\">2.5.7 </span> Getting Property Graph Metadata",
                                    "href":"using-property-graphs-oracle-database.html#GUID-F97996AC-8DE0-4F8A-9789-09FF1A473B68"
                                },
                                {
                                    "title":"<span class=\"secnum\">2.5.8 </span> Merging New Data into an Existing Property Graph",
                                    "href":"using-property-graphs-oracle-database.html#GUID-0D1255E4-CE0B-4E2F-B78F-BAF569B7DE43"
                                },
                                {
                                    "title":"<span class=\"secnum\">2.5.9 </span> Opening and Closing a Property Graph Instance",
                                    "href":"using-property-graphs-oracle-database.html#GUID-4B2A2CB6-FE53-4C92-A915-4673D355F470"
                                },
                                {
                                    "title":"<span class=\"secnum\">2.5.10 </span> Creating Vertices",
                                    "href":"using-property-graphs-oracle-database.html#GUID-08F8D5A9-F070-487A-A4E2-221CDDA39344"
                                },
                                {
                                    "title":"<span class=\"secnum\">2.5.11 </span> Creating Edges",
                                    "href":"using-property-graphs-oracle-database.html#GUID-82E59D39-5C57-4987-9BC4-22369A9DBF01"
                                },
                                {
                                    "title":"<span class=\"secnum\">2.5.12 </span> Deleting Vertices and Edges",
                                    "href":"using-property-graphs-oracle-database.html#GUID-0FC2511D-0E43-41B7-B2D1-77ECBEF6A417"
                                },
                                {
                                    "title":"<span class=\"secnum\">2.5.13 </span> Reading a Graph from a Database into an Embedded In-Memory Analyst",
                                    "href":"using-property-graphs-oracle-database.html#GUID-454C00B5-9662-4C19-BF4D-FD8B1C503E34"
                                },
                                {
                                    "title":"<span class=\"secnum\">2.5.14 </span> Specifying Labels for Vertices",
                                    "href":"using-property-graphs-oracle-database.html#GUID-DCDC3B41-4679-4525-A3E1-44BF8C86187C"
                                },
                                {
                                    "title":"<span class=\"secnum\">2.5.15 </span> Building an In-Memory Graph",
                                    "href":"using-property-graphs-oracle-database.html#GUID-A34FD5F5-EE5F-4956-9630-4C5B02DB6CF7"
                                },
                                {
                                    "title":"<span class=\"secnum\">2.5.16 </span> Dropping a Property Graph",
                                    "href":"using-property-graphs-oracle-database.html#GUID-E17BCADE-4BC9-41D7-A54E-5612C4C6531F"
                                },
                                {
                                    "title":"<span class=\"secnum\">2.5.17 </span> Executing PGQL Queries",
                                    "href":"using-property-graphs-oracle-database.html#GUID-6CDBA4FE-84B2-4666-93AF-45BFF0FF5552"
                                }
                            ]
                        },
                        {
                            "title":"<span class=\"secnum\">2.6 </span> Managing Text Indexing for Property Graph Data",
                            "href":"using-property-graphs-oracle-database.html#GUID-72E0D670-D477-4C0F-914C-8E70E45F9692",
                            "topics":[
                                {
                                    "title":"<span class=\"secnum\">2.6.1 </span> Configuring a Text Index for Property Graph Data",
                                    "href":"using-property-graphs-oracle-database.html#GUID-17FBB50B-DF01-4C07-9617-A89F7CACBA67",
                                    "topics":[
                                        {
                                            "title":"<span class=\"secnum\">2.6.1.1 </span> Configuring Text Indexes Using Oracle Text",
                                            "href":"using-property-graphs-oracle-database.html#GUID-E33E997D-3210-4DD5-9B33-90549B1AABD2"
                                        },
                                        {
                                            "title":"<span class=\"secnum\">2.6.1.2 </span> Configuring Text Indexes Using the Apache Lucene Search Engine",
                                            "href":"using-property-graphs-oracle-database.html#GUID-1C216BB1-D3B0-4FED-B986-53A1DFE1A6C0"
                                        },
                                        {
                                            "title":"<span class=\"secnum\">2.6.1.3 </span> Configuring Text Indexes Using the SolrCloud Search Engine",
                                            "href":"using-property-graphs-oracle-database.html#GUID-B226DD33-93B6-4DF0-A6B3-68EDF280B38C"
                                        }
                                    ]
                                },
                                {
                                    "title":"<span class=\"secnum\">2.6.2 </span> Using Automatic Indexes for Property Graph Data",
                                    "href":"using-property-graphs-oracle-database.html#GUID-469E1B26-DE30-4AFA-801E-BA14AB30214B"
                                },
                                {
                                    "title":"<span class=\"secnum\">2.6.3 </span> Using Manual Indexes for Property Graph Data",
                                    "href":"using-property-graphs-oracle-database.html#GUID-C56AB70D-CB45-4208-84D8-6C5DBF67A8FC"
                                },
                                {
                                    "title":"<span class=\"secnum\">2.6.4 </span> Executing Search Queries Over a Property Graph’s Text Indexes",
                                    "href":"using-property-graphs-oracle-database.html#GUID-F175FF6A-5E87-4499-8086-95069168C88B",
                                    "topics":[
                                        {
                                            "title":"<span class=\"secnum\">2.6.4.1 </span> Executing Search Queries Over a Text Index Using Oracle Text",
                                            "href":"using-property-graphs-oracle-database.html#GUID-E54C31E3-6DA4-4E75-A194-D3090A72C52C"
                                        },
                                        {
                                            "title":"<span class=\"secnum\">2.6.4.2 </span> Executing Search Queries Over a Text Index Using Apache Lucene",
                                            "href":"using-property-graphs-oracle-database.html#GUID-D2358E05-A701-4285-8A25-B1C4CCD2C476"
                                        },
                                        {
                                            "title":"<span class=\"secnum\">2.6.4.3 </span> Executing Search Queries Over a Text Index Using SolrCloud",
                                            "href":"using-property-graphs-oracle-database.html#GUID-A622D5B1-6515-419B-AF22-327B8C10F57E"
                                        }
                                    ]
                                },
                                {
                                    "title":"<span class=\"secnum\">2.6.5 </span> Handling Data Types",
                                    "href":"using-property-graphs-oracle-database.html#GUID-26C80DDB-DA5A-48B6-B729-9BE34DECCBB6",
                                    "topics":[
                                        {
                                            "title":"<span class=\"secnum\">2.6.5.1 </span> Handling Data Types on Oracle Text",
                                            "href":"using-property-graphs-oracle-database.html#GUID-BC847F16-AA8A-4CD0-BEF3-F50344F5EA9B"
                                        },
                                        {
                                            "title":"<span class=\"secnum\">2.6.5.2 </span> Appending Data Type Identifiers on Apache Lucene",
                                            "href":"using-property-graphs-oracle-database.html#GUID-3B1143F6-AEE0-46A9-8BE4-FA7860A844CD"
                                        },
                                        {
                                            "title":"<span class=\"secnum\">2.6.5.3 </span> Appending Data Type Identifiers on SolrCloud",
                                            "href":"using-property-graphs-oracle-database.html#GUID-996CAF8D-F77E-4624-8684-695434B555A3"
                                        }
                                    ]
                                },
                                {
                                    "title":"<span class=\"secnum\">2.6.6 </span> Uploading a Collection's SolrCloud Configuration to Zookeeper",
                                    "href":"using-property-graphs-oracle-database.html#GUID-A5797EAF-4165-4ACE-B1BD-0284DA391DB3"
                                },
                                {
                                    "title":"<span class=\"secnum\">2.6.7 </span> Updating Configuration Settings on Text Indexes for Property Graph Data",
                                    "href":"using-property-graphs-oracle-database.html#GUID-F198F6FA-875D-42E4-A43C-7A9B01FFEA1E"
                                },
                                {
                                    "title":"<span class=\"secnum\">2.6.8 </span> Using Parallel Query on Text Indexes for Property Graph Data",
                                    "href":"using-property-graphs-oracle-database.html#GUID-7C5C1BDB-13EA-4504-9B4F-B8F7D788AE52",
                                    "topics":[
                                        {
                                            "title":"<span class=\"secnum\">2.6.8.1 </span> Parallel Text Search Using Oracle Text",
                                            "href":"using-property-graphs-oracle-database.html#GUID-BDA00920-033D-4E99-AB1E-69E5DC28354C"
                                        },
                                        {
                                            "title":"<span class=\"secnum\">2.6.8.2 </span> Parallel Text Query Using Apache Lucene",
                                            "href":"using-property-graphs-oracle-database.html#GUID-39271C38-DD04-4883-BA8F-010C549EC934"
                                        },
                                        {
                                            "title":"<span class=\"secnum\">2.6.8.3 </span> Parallel Text Search Using SolrCloud",
                                            "href":"using-property-graphs-oracle-database.html#GUID-EF81CE3F-8C63-4A0F-9D4F-84F8740ED446"
                                        }
                                    ]
                                },
                                {
                                    "title":"<span class=\"secnum\">2.6.9 </span> Using Native Query Objects on Text Indexes for Property Graph Data",
                                    "href":"using-property-graphs-oracle-database.html#GUID-C957BD65-7FA5-4EC2-8485-4BB0D297AE26",
                                    "topics":[
                                        {
                                            "title":"<span class=\"secnum\">2.6.9.1 </span> Using Native Query Objects with Apache Lucene",
                                            "href":"using-property-graphs-oracle-database.html#GUID-586EFE55-1CB4-4B41-BCFB-0F07384635CD"
                                        },
                                        {
                                            "title":"<span class=\"secnum\">2.6.9.2 </span> Using Native Query Objects with SolrCloud",
                                            "href":"using-property-graphs-oracle-database.html#GUID-B0C35597-01E6-42EB-AAB3-7B42E2EBB644"
                                        }
                                    ]
                                },
                                {
                                    "title":"<span class=\"secnum\">2.6.10 </span> Using Native Query Results on Text Indexes for Property Graph Data",
                                    "href":"using-property-graphs-oracle-database.html#GUID-F0D99092-49A0-434E-9827-C672CC18F64C",
                                    "topics":[
                                        {
                                            "title":"<span class=\"secnum\">2.6.10.1 </span> Using Native Query Results with Apache Lucene",
                                            "href":"using-property-graphs-oracle-database.html#GUID-1EE27967-2238-4DBD-8642-D6D18142E54C"
                                        },
                                        {
                                            "title":"<span class=\"secnum\">2.6.10.2 </span> Using Native Query Results with SolrCloud",
                                            "href":"using-property-graphs-oracle-database.html#GUID-5F6E1DB7-78EA-4A44-85A9-6F5BB6D8FEE8"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "title":"<span class=\"secnum\">2.7 </span> Access Control for Property Graph Data (Graph-Level and OLS)",
                            "href":"using-property-graphs-oracle-database.html#GUID-5E5587AB-52F0-4C69-9C4B-6EC667620BB7",
                            "topics":[
                                {
                                    "title":"<span class=\"secnum\">2.7.1 </span> Applying Oracle Label Security (OLS) on Property Graph Data",
                                    "href":"using-property-graphs-oracle-database.html#GUID-3A4E6B7D-5803-4379-912E-9BCCFA08308A"
                                }
                            ]
                        },
                        {
                            "title":"<span class=\"secnum\">2.8 </span> Using the Groovy Shell with Property Graph Data",
                            "href":"using-property-graphs-oracle-database.html#GUID-DFCC2E13-5548-4DAC-B0DE-E4CEF13E97C7"
                        },
                        {
                            "title":"<span class=\"secnum\">2.9 </span> Using the In-Memory Analyst Zeppelin Interpreter with Oracle Database",
                            "href":"using-property-graphs-oracle-database.html#GUID-BDA846D6-DA18-4049-91DF-E96BEAB02B6D"
                        },
                        {
                            "title":"<span class=\"secnum\">2.10 </span> REST Support for Oracle Database Property Graph Data",
                            "href":"using-property-graphs-oracle-database.html#GUID-D0904048-83F2-48AE-9B23-675D3F934BD9",
                            "topics":[
                                {
                                    "title":"<span class=\"secnum\">2.10.1 </span> Building the REST Web Application Archive (WAR) File for Oracle Database",
                                    "href":"using-property-graphs-oracle-database.html#GUID-0ED64238-CBAB-4D89-9411-05D2F920ACFB"
                                },
                                {
                                    "title":"<span class=\"secnum\">2.10.2 </span> Deploying the RESTful Property Graph Web Service for Oracle Database",
                                    "href":"using-property-graphs-oracle-database.html#GUID-A51758AD-5930-4105-81AC-9F1AA5EF4E0D",
                                    "topics":[
                                        {
                                            "title":"<span class=\"secnum\">2.10.2.1 </span> RESTful Property Graph Service Configuration File (rexster.xml) for Oracle Database",
                                            "href":"using-property-graphs-oracle-database.html#GUID-64BB71FF-D88C-4182-BED1-C382297F3CFD"
                                        }
                                    ]
                                },
                                {
                                    "title":"<span class=\"secnum\">2.10.3 </span> Property Graph REST API Operations Information for Oracle Database",
                                    "href":"using-property-graphs-oracle-database.html#GUID-BB6CBF64-8B59-4356-B45B-3D9CBEBCA2C6",
                                    "topics":[
                                        {
                                            "title":"<span class=\"secnum\">2.10.3.1 </span> GET Operations (Property Graphs) for Oracle Database",
                                            "href":"using-property-graphs-oracle-database.html#GUID-22F4D8AA-D028-4B68-A026-A970F1BCE343"
                                        },
                                        {
                                            "title":"<span class=\"secnum\">2.10.3.2 </span> POST Operations (Property Graphs) for Oracle Database",
                                            "href":"using-property-graphs-oracle-database.html#GUID-BCF729EE-0742-41A0-8BBE-B629EF7D4FF8"
                                        },
                                        {
                                            "title":"<span class=\"secnum\">2.10.3.3 </span> PUT Operations (Property Graphs) for Oracle Database",
                                            "href":"using-property-graphs-oracle-database.html#GUID-22BD7107-5546-4072-A194-BBBDF8C63CBA"
                                        },
                                        {
                                            "title":"<span class=\"secnum\">2.10.3.4 </span> DELETE Operations (Property Graphs) for Oracle Database",
                                            "href":"using-property-graphs-oracle-database.html#GUID-4343EDC5-88CE-441E-A377-238ED855D010"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "title":"<span class=\"secnum\">2.11 </span> Creating Property Graph Views on an RDF Graph",
                            "href":"using-property-graphs-oracle-database.html#GUID-24C684A5-8A18-45F3-9F0D-A8F7CCF964BE"
                        },
                        {
                            "title":"<span class=\"secnum\">2.12 </span> Handling Property Graphs Using a Two-Tables Schema",
                            "href":"using-property-graphs-oracle-database.html#GUID-7A2037E1-2DB7-40A2-AA37-0A91D0E34D00",
                            "topics":[
                                {
                                    "title":"<span class=\"secnum\">2.12.1 </span> Preparing the Two-Tables Schema",
                                    "href":"using-property-graphs-oracle-database.html#GUID-AE6022AC-2B38-46AA-83E7-3A94DD2648CD"
                                },
                                {
                                    "title":"<span class=\"secnum\">2.12.2 </span> Storing Data in a Property Graph Using a Two-Tables Schema",
                                    "href":"using-property-graphs-oracle-database.html#GUID-D494CD8D-80D7-45B0-A6FF-E35988AE5A65"
                                },
                                {
                                    "title":"<span class=\"secnum\">2.12.3 </span> Reading Data from a Property Graph Using a Two-Tables Schema",
                                    "href":"using-property-graphs-oracle-database.html#GUID-977CBAFC-9B5B-4C48-BF65-626E410A85FE"
                                }
                            ]
                        },
                        {
                            "title":"<span class=\"secnum\">2.13 </span> Oracle Flat File Format Definition",
                            "href":"using-property-graphs-oracle-database.html#GUID-7FC09376-F237-41E8-B0FE-9D1044A59FBB",
                            "topics":[
                                {
                                    "title":"<span class=\"secnum\">2.13.1 </span> About the Property Graph Description Files",
                                    "href":"using-property-graphs-oracle-database.html#GUID-2716F004-2C67-489A-87E2-957C5AEAA7D4"
                                },
                                {
                                    "title":"<span class=\"secnum\">2.13.2 </span> Edge File",
                                    "href":"using-property-graphs-oracle-database.html#GUID-20FD630A-CE49-44F5-A117-EE1BA5CC5DB3"
                                },
                                {
                                    "title":"<span class=\"secnum\">2.13.3 </span> Vertex File",
                                    "href":"using-property-graphs-oracle-database.html#GUID-18026FD1-4EF5-4CE8-A6A2-73A31FE44AFF"
                                },
                                {
                                    "title":"<span class=\"secnum\">2.13.4 </span> Encoding Special Characters",
                                    "href":"using-property-graphs-oracle-database.html#GUID-7323744B-BD8D-4179-91D3-93C92461D92B"
                                },
                                {
                                    "title":"<span class=\"secnum\">2.13.5 </span> Example Property Graph in Oracle Flat File Format",
                                    "href":"using-property-graphs-oracle-database.html#GUID-14C10BAB-3CE4-4D5E-BA09-7C6697F226FE"
                                },
                                {
                                    "title":"<span class=\"secnum\">2.13.6 </span> Converting an Oracle Database Table to an Oracle-Defined Property Graph Flat File",
                                    "href":"using-property-graphs-oracle-database.html#GUID-EFA9E4E7-F854-4224-8828-F8843DE91D8B"
                                },
                                {
                                    "title":"<span class=\"secnum\">2.13.7 </span> Converting CSV Files for Vertices and Edges to Oracle-Defined Property Graph Flat Files",
                                    "href":"using-property-graphs-oracle-database.html#GUID-269EA431-B8C2-45F5-9338-482D4D4E34F5"
                                }
                            ]
                        },
                        {
                            "title":"<span class=\"secnum\">2.14 </span> Example Python User Interface",
                            "href":"using-property-graphs-oracle-database.html#GUID-1946BFA3-8995-4EE5-8E39-FE1C58391EAD"
                        }
                    ]
                },
                {
                    "title":"<span class=\"secnum\">3 </span> Using the In-Memory Analyst (PGX)",
                    "href":"using-inmemory-analyst-oracle-database.html#GUID-C80502F2-67B0-42B3-B80F-6DA297EA655C",
                    "topics":[
                        {
                            "title":"<span class=\"secnum\">3.1 </span> Reading a Graph into Memory",
                            "href":"using-inmemory-analyst-oracle-database.html#GUID-254F911A-2750-4CF7-A895-E0B9E027B18C",
                            "topics":[
                                {
                                    "title":"<span class=\"secnum\">3.1.1 </span> Connecting to an In-Memory Analyst Server Instance",
                                    "href":"using-inmemory-analyst-oracle-database.html#GUID-9660AEF0-DD32-4882-87BE-749C0C7FE102"
                                },
                                {
                                    "title":"<span class=\"secnum\">3.1.2 </span> Using the Shell Help",
                                    "href":"using-inmemory-analyst-oracle-database.html#GUID-7E6E3198-28DC-484E-9AE1-0339799AD4B7"
                                },
                                {
                                    "title":"<span class=\"secnum\">3.1.3 </span> Providing Graph Metadata in a Configuration File",
                                    "href":"using-inmemory-analyst-oracle-database.html#GUID-BE3E5A99-896A-458D-BF2F-270CC82EA43D"
                                },
                                {
                                    "title":"<span class=\"secnum\">3.1.4 </span> Reading Graph Data into Memory",
                                    "href":"using-inmemory-analyst-oracle-database.html#GUID-4D385F44-4DE9-4223-BEE5-06E1479FAE06",
                                    "topics":[
                                        {
                                            "title":"<span class=\"secnum\">3.1.4.1 </span> Read a Graph Stored in Oracle Database into Memory",
                                            "href":"using-inmemory-analyst-oracle-database.html#GUID-B8619BEA-4827-4175-9A0A-427C3020927C"
                                        },
                                        {
                                            "title":"<span class=\"secnum\">3.1.4.2 </span> Read a Graph Stored in the Local File System into Memory",
                                            "href":"using-inmemory-analyst-oracle-database.html#GUID-55CDDB76-EC55-4169-82AD-ED6E9116A4AD"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "title":"<span class=\"secnum\">3.2 </span> Reading Custom Graph Data",
                            "href":"using-inmemory-analyst-oracle-database.html#GUID-06D546D0-FF3A-45E2-B30E-A78B52871DFF",
                            "topics":[
                                {
                                    "title":"<span class=\"secnum\">3.2.1 </span> Creating a Simple Graph File",
                                    "href":"using-inmemory-analyst-oracle-database.html#GUID-262F412D-51A7-4EB3-8842-76C6892B63A4"
                                },
                                {
                                    "title":"<span class=\"secnum\">3.2.2 </span> Adding a Vertex Property",
                                    "href":"using-inmemory-analyst-oracle-database.html#GUID-8282B436-9946-4CCE-A42E-5C91CE0F2FAE"
                                },
                                {
                                    "title":"<span class=\"secnum\">3.2.3 </span> Using Strings as Vertex Identifiers",
                                    "href":"using-inmemory-analyst-oracle-database.html#GUID-808D6ABB-9048-41E1-A4C1-E232A9B6664A"
                                },
                                {
                                    "title":"<span class=\"secnum\">3.2.4 </span> Adding an Edge Property",
                                    "href":"using-inmemory-analyst-oracle-database.html#GUID-DA144BD7-6133-498F-BFED-BED9F84182BD"
                                }
                            ]
                        },
                        {
                            "title":"<span class=\"secnum\">3.3 </span> Storing Graph Data on Disk",
                            "href":"using-inmemory-analyst-oracle-database.html#GUID-8E32C3CB-4546-49C0-8262-1C8FF92FD0F7",
                            "topics":[
                                {
                                    "title":"<span class=\"secnum\">3.3.1 </span> Storing the Results of Analysis in a Vertex Property",
                                    "href":"using-inmemory-analyst-oracle-database.html#GUID-D9143A2A-BA3B-4390-A485-65E3ADBF00E3"
                                },
                                {
                                    "title":"<span class=\"secnum\">3.3.2 </span> Storing a Graph in Edge-List Format on Disk",
                                    "href":"using-inmemory-analyst-oracle-database.html#GUID-6397CA9F-F60B-46E8-BE24-E23B702E187C"
                                }
                            ]
                        },
                        {
                            "title":"<span class=\"secnum\">3.4 </span> Executing Built-in Algorithms",
                            "href":"using-inmemory-analyst-oracle-database.html#GUID-71FC3DB6-62F1-42E6-B711-A32958FC53D4",
                            "topics":[
                                {
                                    "title":"<span class=\"secnum\">3.4.1 </span> About the In-Memory Analyst",
                                    "href":"using-inmemory-analyst-oracle-database.html#GUID-0EB00328-1272-4F00-ADCB-8F88CB1B334D"
                                },
                                {
                                    "title":"<span class=\"secnum\">3.4.2 </span> Running the Triangle Counting Algorithm",
                                    "href":"using-inmemory-analyst-oracle-database.html#GUID-7314197C-DFBC-4F64-A383-D32441D7E821"
                                },
                                {
                                    "title":"<span class=\"secnum\">3.4.3 </span> Running the Pagerank Algorithm",
                                    "href":"using-inmemory-analyst-oracle-database.html#GUID-8E5C3E18-A0B7-43FF-AE69-688F900311BC"
                                }
                            ]
                        },
                        {
                            "title":"<span class=\"secnum\">3.5 </span> Creating Subgraphs",
                            "href":"using-inmemory-analyst-oracle-database.html#GUID-D3134FE8-E17D-40F0-A32D-4CA40B60F361",
                            "topics":[
                                {
                                    "title":"<span class=\"secnum\">3.5.1 </span> About Filter Expressions",
                                    "href":"using-inmemory-analyst-oracle-database.html#GUID-4A25C497-319F-4760-988B-8CD45EA109D3"
                                },
                                {
                                    "title":"<span class=\"secnum\">3.5.2 </span> Using a Simple Filter to Create a Subgraph",
                                    "href":"using-inmemory-analyst-oracle-database.html#GUID-01A8BB3D-6410-40CD-98E0-0621FCC30BC5"
                                },
                                {
                                    "title":"<span class=\"secnum\">3.5.3 </span> Using a Complex Filter to Create a Subgraph",
                                    "href":"using-inmemory-analyst-oracle-database.html#GUID-90AE8A8F-EDFD-4847-96E4-35C5F26984B1"
                                },
                                {
                                    "title":"<span class=\"secnum\">3.5.4 </span> Using a Vertex Set to Create a Bipartite Subgraph",
                                    "href":"using-inmemory-analyst-oracle-database.html#GUID-E3B9CF35-09D6-43B7-86E2-7D4A3B01FBC6"
                                }
                            ]
                        },
                        {
                            "title":"<span class=\"secnum\">3.6 </span> Using Automatic Delta Refresh to Handle Database Changes",
                            "href":"using-inmemory-analyst-oracle-database.html#GUID-D2C0F3CF-2B00-4712-9375-E40985C26C7C",
                            "topics":[
                                {
                                    "title":"<span class=\"secnum\">3.6.1 </span> Configuring the In-Memory Server for Auto-Refresh",
                                    "href":"using-inmemory-analyst-oracle-database.html#GUID-1DF8FA80-DB74-4268-9AAA-86177542F3AC"
                                },
                                {
                                    "title":"<span class=\"secnum\">3.6.2 </span> Configuring Basic Auto-Refresh",
                                    "href":"using-inmemory-analyst-oracle-database.html#GUID-1A2AEB12-DD53-4CBA-9558-14CDA5DFC768"
                                },
                                {
                                    "title":"<span class=\"secnum\">3.6.3 </span> Reading the Graph Using the In-Memory Analyst or a Java Application",
                                    "href":"using-inmemory-analyst-oracle-database.html#GUID-7FCED2D4-B678-488B-A0D4-6E87871172D2"
                                },
                                {
                                    "title":"<span class=\"secnum\">3.6.4 </span> Checking Out a Specific Snapshot of the Graph",
                                    "href":"using-inmemory-analyst-oracle-database.html#GUID-578DB065-E3A7-4834-A48E-EFC09C795284"
                                },
                                {
                                    "title":"<span class=\"secnum\">3.6.5 </span> Advanced Auto-Refresh Configuration",
                                    "href":"using-inmemory-analyst-oracle-database.html#GUID-0815347C-919C-4478-A96A-246ACED61A66"
                                }
                            ]
                        },
                        {
                            "title":"<span class=\"secnum\">3.7 </span> Deploying to Apache Tomcat",
                            "href":"using-inmemory-analyst-oracle-database.html#GUID-1732BD3C-F120-449B-9FED-90E638A6097A",
                            "topics":[
                                {
                                    "title":"<span class=\"secnum\">3.7.1 </span> About the Authentication Mechanism",
                                    "href":"using-inmemory-analyst-oracle-database.html#GUID-B3CBF04E-4A80-401E-9101-26833BF881AF"
                                }
                            ]
                        },
                        {
                            "title":"<span class=\"secnum\">3.8 </span> Deploying to Oracle WebLogic Server",
                            "href":"using-inmemory-analyst-oracle-database.html#GUID-BFE7B780-7841-4DAC-88E9-84C45D160DE9",
                            "topics":[
                                {
                                    "title":"<span class=\"secnum\">3.8.1 </span> Installing Oracle WebLogic Server",
                                    "href":"using-inmemory-analyst-oracle-database.html#GUID-E0C8D78D-B4D4-4F27-88B5-80D392A7928A"
                                },
                                {
                                    "title":"<span class=\"secnum\">3.8.2 </span> Deploying the In-Memory Analyst",
                                    "href":"using-inmemory-analyst-oracle-database.html#GUID-F5F8D8AE-B5CE-4383-B349-B8926D5932D5"
                                },
                                {
                                    "title":"<span class=\"secnum\">3.8.3 </span> Verifying That the Server Works",
                                    "href":"using-inmemory-analyst-oracle-database.html#GUID-AAC79296-F768-4997-A57F-EF62E50FB71C"
                                },
                                {
                                    "title":"<span class=\"secnum\">3.8.4 </span> About the Authentication Mechanism",
                                    "href":"using-inmemory-analyst-oracle-database.html#unique_270712142"
                                }
                            ]
                        },
                        {
                            "title":"<span class=\"secnum\">3.9 </span> Connecting to the In-Memory Analyst Server",
                            "href":"using-inmemory-analyst-oracle-database.html#GUID-ABA81274-29A0-4D9A-BA1A-A241C0539BF5",
                            "topics":[
                                {
                                    "title":"<span class=\"secnum\">3.9.1 </span> Connecting with the In-Memory Analyst Shell",
                                    "href":"using-inmemory-analyst-oracle-database.html#GUID-11783F8D-6375-493B-B29A-5BA6E4B21A6A",
                                    "topics":[
                                        {
                                            "title":"<span class=\"secnum\">3.9.1.1 </span> About Logging HTTP Requests",
                                            "href":"using-inmemory-analyst-oracle-database.html#GUID-44ABBB96-31EE-4831-B37E-BD7001A06C04"
                                        }
                                    ]
                                },
                                {
                                    "title":"<span class=\"secnum\">3.9.2 </span> Connecting with Java",
                                    "href":"using-inmemory-analyst-oracle-database.html#GUID-CAB8198A-B9DB-4781-8FAB-44CE35B6B6CB"
                                },
                                {
                                    "title":"<span class=\"secnum\">3.9.3 </span> Connecting with the PGX REST API",
                                    "href":"using-inmemory-analyst-oracle-database.html#GUID-93FB57BD-C898-45BF-BAF7-581C33591BB4"
                                }
                            ]
                        },
                        {
                            "title":"<span class=\"secnum\">3.10 </span> Managing Property Graph Snapshots",
                            "href":"using-inmemory-analyst-oracle-database.html#GUID-3AB6A64B-7E50-493F-A896-6812243D7841"
                        }
                    ]
                },
                {
                    "title":"<span class=\"secnum\">4 </span> SQL-Based Property Graph Query and Analytics",
                    "href":"sql-based-property-graph-query-analytics.html#GUID-C5CC6650-0375-4F32-8317-BAF859C1909C",
                    "topics":[
                        {
                            "title":"<span class=\"secnum\">4.1 </span> Simple Property Graph Queries",
                            "href":"sql-based-property-graph-query-analytics.html#GUID-DA3E5ADB-5851-4686-8418-EFF473794846"
                        },
                        {
                            "title":"<span class=\"secnum\">4.2 </span> Text Queries on Property Graphs",
                            "href":"sql-based-property-graph-query-analytics.html#GUID-A96D9A39-60CB-4E89-B5C5-EEC8E811C734"
                        },
                        {
                            "title":"<span class=\"secnum\">4.3 </span> Navigation and Graph Pattern Matching",
                            "href":"sql-based-property-graph-query-analytics.html#GUID-7B2B2D5C-A561-4ECD-B690-ABA795E07BDA"
                        },
                        {
                            "title":"<span class=\"secnum\">4.4 </span> Navigation Options: CONNECT BY and Parallel Recursion",
                            "href":"sql-based-property-graph-query-analytics.html#GUID-81370EE3-3917-4CA6-BB22-F7AA434EDB09"
                        },
                        {
                            "title":"<span class=\"secnum\">4.5 </span> Pivot",
                            "href":"sql-based-property-graph-query-analytics.html#GUID-3F810D6C-CC45-4612-ADAB-C1B2B9873734"
                        },
                        {
                            "title":"<span class=\"secnum\">4.6 </span> SQL-Based Property Graph Analytics",
                            "href":"sql-based-property-graph-query-analytics.html#GUID-01E928F5-C8E1-4109-A63E-257B1F4AEDC6",
                            "topics":[
                                {
                                    "title":"<span class=\"secnum\">4.6.1 </span> Shortest Path Examples",
                                    "href":"sql-based-property-graph-query-analytics.html#GUID-1A615347-46A0-4D93-8A65-B25113403DC8"
                                },
                                {
                                    "title":"<span class=\"secnum\">4.6.2 </span> Collaborative Filtering Overview and Examples",
                                    "href":"sql-based-property-graph-query-analytics.html#GUID-43991EC5-DB08-4597-A81F-B0FBCD412CA4"
                                }
                            ]
                        },
                        {
                            "title":"<span class=\"secnum\">4.7 </span> Property Graph Query Language (PGQL)",
                            "href":"sql-based-property-graph-query-analytics.html#GUID-301FF092-1A07-43D2-91E5-0C5AFF3467CC",
                            "topics":[
                                {
                                    "title":"<span class=\"secnum\">4.7.1 </span> Topology Constraints with PGQL",
                                    "href":"sql-based-property-graph-query-analytics.html#GUID-E7491A7F-44F6-459C-AC28-1AE20074E1B9"
                                },
                                {
                                    "title":"<span class=\"secnum\">4.7.2 </span> Constraints are Directional with PGQL",
                                    "href":"sql-based-property-graph-query-analytics.html#GUID-AFBD9879-6198-413B-ADA3-B70B2EC178D8"
                                },
                                {
                                    "title":"<span class=\"secnum\">4.7.3 </span> Vertex and Edge Labels with PGQL",
                                    "href":"sql-based-property-graph-query-analytics.html#GUID-8BD36D93-1B37-4E5C-A469-D489F69C0F34"
                                },
                                {
                                    "title":"<span class=\"secnum\">4.7.4 </span> Regular Path Queries with PGQL",
                                    "href":"sql-based-property-graph-query-analytics.html#GUID-A218D733-6A70-4DB7-9827-27C74D446655"
                                },
                                {
                                    "title":"<span class=\"secnum\">4.7.5 </span> Aggregation and Sorting with PGQL",
                                    "href":"sql-based-property-graph-query-analytics.html#GUID-14A728FA-8F95-425B-A498-B8BA364B9734"
                                }
                            ]
                        },
                        {
                            "title":"<span class=\"secnum\">4.8 </span> Executing PGQL Queries Directly Against Oracle Database",
                            "href":"sql-based-property-graph-query-analytics.html#GUID-94F08780-EC3D-4F9B-985F-49984939E61C",
                            "topics":[
                                {
                                    "title":"<span class=\"secnum\">4.8.1 </span> PGQL Features Supported",
                                    "href":"sql-based-property-graph-query-analytics.html#GUID-D2FC29F7-B4C7-407D-BE73-784E593DC73C",
                                    "topics":[
                                        {
                                            "title":"<span class=\"secnum\">4.8.1.1 </span> Temporal Types",
                                            "href":"sql-based-property-graph-query-analytics.html#GUID-5754F6E9-B08E-40A5-BBE7-D35393A6562E"
                                        },
                                        {
                                            "title":"<span class=\"secnum\">4.8.1.2 </span> Type Casting",
                                            "href":"sql-based-property-graph-query-analytics.html#GUID-368FDAFB-9183-463B-A623-2D473F64779C"
                                        },
                                        {
                                            "title":"<span class=\"secnum\">4.8.1.3 </span> Missing Properties",
                                            "href":"sql-based-property-graph-query-analytics.html#GUID-D50795B1-079B-4A0F-99C6-5157F28D941A"
                                        },
                                        {
                                            "title":"<span class=\"secnum\">4.8.1.4 </span> CONTAINS Built-in Function",
                                            "href":"sql-based-property-graph-query-analytics.html#GUID-0DE03EC7-2D45-4B5F-B940-0F86CE51CC1A"
                                        }
                                    ]
                                },
                                {
                                    "title":"<span class=\"secnum\">4.8.2 </span> Using the oracle.pg.rdbms Java Package to Execute PGQL Queries",
                                    "href":"sql-based-property-graph-query-analytics.html#GUID-296732FE-D57B-41B5-937B-078E234422CC",
                                    "topics":[
                                        {
                                            "title":"<span class=\"secnum\">4.8.2.1 </span> Basic Query Execution",
                                            "href":"sql-based-property-graph-query-analytics.html#GUID-120AA4F5-7263-4B51-9E7A-46712FD985A9"
                                        },
                                        {
                                            "title":"<span class=\"secnum\">4.8.2.2 </span> Using Bind Variables in PGQL Queries",
                                            "href":"sql-based-property-graph-query-analytics.html#GUID-E9657B9D-B648-484F-9572-7DDD7F038871"
                                        },
                                        {
                                            "title":"<span class=\"secnum\">4.8.2.3 </span> Using a Text Index with PGQL Queries",
                                            "href":"sql-based-property-graph-query-analytics.html#GUID-6C522195-4D93-4EC3-943A-CBD8D3B22F24"
                                        },
                                        {
                                            "title":"<span class=\"secnum\">4.8.2.4 </span> Obtaining the SQL Translation for a PGQL Query",
                                            "href":"sql-based-property-graph-query-analytics.html#GUID-7642327B-B973-4C48-90B1-1447F3D57CA5"
                                        },
                                        {
                                            "title":"<span class=\"secnum\">4.8.2.5 </span> Additional Options for PGQL Translation and Execution",
                                            "href":"sql-based-property-graph-query-analytics.html#GUID-E9CC82C3-BD5A-4581-AE26-2432D6929D44",
                                            "topics":[
                                                {
                                                    "title":"<span class=\"secnum\">4.8.2.5.1 </span> Query Options Controlled by Explicit Arguments",
                                                    "href":"sql-based-property-graph-query-analytics.html#GUID-099CB0E0-DFE4-4CEF-AA37-08D96FADA3DF"
                                                },
                                                {
                                                    "title":"<span class=\"secnum\">4.8.2.5.2 </span> Using the GT$ Skeleton Table",
                                                    "href":"sql-based-property-graph-query-analytics.html#GUID-AC37DA9D-7178-4BDA-B21F-FC18EB27A290"
                                                },
                                                {
                                                    "title":"<span class=\"secnum\">4.8.2.5.3 </span> Path Query Options",
                                                    "href":"sql-based-property-graph-query-analytics.html#GUID-3369EA15-739E-4B44-9178-AFC79A33031C"
                                                },
                                                {
                                                    "title":"<span class=\"secnum\">4.8.2.5.4 </span> Options for Partial Object Construction",
                                                    "href":"sql-based-property-graph-query-analytics.html#GUID-4B12B361-A502-4B39-9267-E457C2F14D74"
                                                }
                                            ]
                                        },
                                        {
                                            "title":"<span class=\"secnum\">4.8.2.6 </span> Querying Another User’s Property Graph",
                                            "href":"sql-based-property-graph-query-analytics.html#GUID-623F91CC-1686-4D95-B69F-FA7F81352A90"
                                        },
                                        {
                                            "title":"<span class=\"secnum\">4.8.2.7 </span> Using Query Optimizer Hints with PGQL",
                                            "href":"sql-based-property-graph-query-analytics.html#GUID-EECCE896-473F-46DD-8805-9BF696DF60AF"
                                        }
                                    ]
                                },
                                {
                                    "title":"<span class=\"secnum\">4.8.3 </span> Performance Considerations for PGQL Queries",
                                    "href":"sql-based-property-graph-query-analytics.html#GUID-BAD8CE60-CDF7-4FCF-987C-90658D78BDEA"
                                }
                            ]
                        }
                    ]
                },
                {
                    "title":"<span class=\"secnum\">5 </span> OPG_APIS Package Subprograms",
                    "href":"OPG_APIS-reference.html#GUID-A5F629F8-D086-4E7F-8ECF-6094982E7A05",
                    "topics":[
                        {
                            "title":"<span class=\"secnum\">5.1 </span> OPG_APIS.ANALYZE_PG",
                            "href":"OPG_APIS-reference.html#GUID-7B1D9A79-CFFA-46A1-AB96-F9E9AE1497D4"
                        },
                        {
                            "title":"<span class=\"secnum\">5.2 </span> OPG_APIS.CF",
                            "href":"OPG_APIS-reference.html#GUID-94F53C56-F77A-41A2-BF2A-AAB359D88170"
                        },
                        {
                            "title":"<span class=\"secnum\">5.3 </span> OPG_APIS.CF_CLEANUP",
                            "href":"OPG_APIS-reference.html#GUID-5DCE3ADF-B40B-4483-969A-7141D37656E6"
                        },
                        {
                            "title":"<span class=\"secnum\">5.4 </span> OPG_APIS.CF_PREP",
                            "href":"OPG_APIS-reference.html#GUID-FD4E9251-F29E-4B7B-B65E-86E794DF6B65"
                        },
                        {
                            "title":"<span class=\"secnum\">5.5 </span> OPG_APIS.CLEAR_PG",
                            "href":"OPG_APIS-reference.html#GUID-A2F5C016-2EC3-474A-9C90-8419B18B4E1B"
                        },
                        {
                            "title":"<span class=\"secnum\">5.6 </span> OPG_APIS.CLEAR_PG_INDICES",
                            "href":"OPG_APIS-reference.html#GUID-B755803C-C44F-47F9-BC86-D6B2D49E01D8"
                        },
                        {
                            "title":"<span class=\"secnum\">5.7 </span> OPG_APIS.CLONE_GRAPH",
                            "href":"OPG_APIS-reference.html#GUID-B9721E0C-EA8F-48D3-A46C-81AD2E5B268F"
                        },
                        {
                            "title":"<span class=\"secnum\">5.8 </span> OPG_APIS.COUNT_TRIANGLE",
                            "href":"OPG_APIS-reference.html#GUID-37F05FC8-6972-4F0A-BA05-D12CAC9A8C76"
                        },
                        {
                            "title":"<span class=\"secnum\">5.9 </span> OPG_APIS.COUNT_TRIANGLE_CLEANUP",
                            "href":"OPG_APIS-reference.html#GUID-D028A0AE-A4E9-4272-B4C8-4F701A100161"
                        },
                        {
                            "title":"<span class=\"secnum\">5.10 </span> OPG_APIS.COUNT_TRIANGLE_PREP",
                            "href":"OPG_APIS-reference.html#GUID-A61D0F42-46C4-45F8-9A7D-6B40AFC8CC58"
                        },
                        {
                            "title":"<span class=\"secnum\">5.11 </span> OPG_APIS.COUNT_TRIANGLE_RENUM",
                            "href":"OPG_APIS-reference.html#GUID-A2A3A0E5-143E-4460-8C1D-C2AB22CE60F0"
                        },
                        {
                            "title":"<span class=\"secnum\">5.12 </span> OPG_APIS.CREATE_EDGES_TEXT_IDX",
                            "href":"OPG_APIS-reference.html#GUID-5CEA8BA9-1348-4FA5-8231-EEE9E87A41C5"
                        },
                        {
                            "title":"<span class=\"secnum\">5.13 </span> OPG_APIS.CREATE_PG",
                            "href":"OPG_APIS-reference.html#GUID-40A654E5-FC7D-4D36-9D25-B60AD7A0DEFE"
                        },
                        {
                            "title":"<span class=\"secnum\">5.14 </span> OPG_APIS.CREATE_PG_SNAPSHOT_TAB",
                            "href":"OPG_APIS-reference.html#GUID-30AEC26F-6796-4715-B410-4DD010173C22"
                        },
                        {
                            "title":"<span class=\"secnum\">5.15 </span> OPG_APIS.CREATE_PG_TEXTIDX_TAB",
                            "href":"OPG_APIS-reference.html#GUID-36916354-E6DF-42FD-B54A-FFCDE78E74BE"
                        },
                        {
                            "title":"<span class=\"secnum\">5.16 </span> OPG_APIS.CREATE_STAT_TABLE",
                            "href":"OPG_APIS-reference.html#GUID-5908FB5E-27D9-4223-BF6E-5796732C30BF"
                        },
                        {
                            "title":"<span class=\"secnum\">5.17 </span> OPG_APIS.CREATE_SUB_GRAPH",
                            "href":"OPG_APIS-reference.html#GUID-53C57342-4A0B-4B3C-9FD2-66627AAAD36B"
                        },
                        {
                            "title":"<span class=\"secnum\">5.18 </span> OPG_APIS.CREATE_VERTICES_TEXT_IDX",
                            "href":"OPG_APIS-reference.html#GUID-873601B7-B97E-4090-8571-0DE467351D02"
                        },
                        {
                            "title":"<span class=\"secnum\">5.19 </span> OPG_APIS.DROP_EDGES_TEXT_IDX",
                            "href":"OPG_APIS-reference.html#GUID-CEA527EE-E024-46BD-91A8-53ED17A71FDF"
                        },
                        {
                            "title":"<span class=\"secnum\">5.20 </span> OPG_APIS.DROP_PG",
                            "href":"OPG_APIS-reference.html#GUID-D55AF064-0157-47A1-B23A-A3EF6C4AF090"
                        },
                        {
                            "title":"<span class=\"secnum\">5.21 </span> OPG_APIS.DROP_PG_VIEW",
                            "href":"OPG_APIS-reference.html#GUID-4AA25FC2-CF45-4213-97FE-1411DAF4C26E"
                        },
                        {
                            "title":"<span class=\"secnum\">5.22 </span> OPG_APIS.DROP_VERTICES_TEXT_IDX",
                            "href":"OPG_APIS-reference.html#GUID-F807A064-E63F-4C5B-AD84-445C66D2EF5C"
                        },
                        {
                            "title":"<span class=\"secnum\">5.23 </span> OPG_APIS.ESTIMATE_TRIANGLE_RENUM",
                            "href":"OPG_APIS-reference.html#GUID-C2E23CFB-A068-48B8-8DCA-873EA7E4A91F"
                        },
                        {
                            "title":"<span class=\"secnum\">5.24 </span> OPG_APIS.EXP_EDGE_TAB_STATS",
                            "href":"OPG_APIS-reference.html#GUID-70D286D3-1A86-4AE4-AAA0-63F7BFE6241B"
                        },
                        {
                            "title":"<span class=\"secnum\">5.25 </span> OPG_APIS.EXP_VERTEX_TAB_STATS",
                            "href":"OPG_APIS-reference.html#GUID-D4A6A128-C645-48F1-A54E-95E25DD3F63B"
                        },
                        {
                            "title":"<span class=\"secnum\">5.26 </span> OPG_APIS.FIND_CC_MAPPING_BASED",
                            "href":"OPG_APIS-reference.html#GUID-57601B68-82E3-48CC-9445-CE1C37FF6317"
                        },
                        {
                            "title":"<span class=\"secnum\">5.27 </span> OPG_APIS.FIND_CLUSTERS_CLEANUP",
                            "href":"OPG_APIS-reference.html#GUID-425206C3-5AA3-4139-B974-97F81678C7B2"
                        },
                        {
                            "title":"<span class=\"secnum\">5.28 </span> OPG_APIS.FIND_CLUSTERS_PREP",
                            "href":"OPG_APIS-reference.html#GUID-70636FEB-B9ED-4AA6-A6D7-496AD4D5AEA5"
                        },
                        {
                            "title":"<span class=\"secnum\">5.29 </span> OPG_APIS.FIND_SP",
                            "href":"OPG_APIS-reference.html#GUID-B515B0DD-6D62-43B3-8373-DFC12F0CC984"
                        },
                        {
                            "title":"<span class=\"secnum\">5.30 </span> OPG_APIS.FIND_SP_CLEANUP",
                            "href":"OPG_APIS-reference.html#GUID-1A4CD41A-C176-4A8F-9534-CCAD8DD7DE18"
                        },
                        {
                            "title":"<span class=\"secnum\">5.31 </span> OPG_APIS.FIND_SP_PREP",
                            "href":"OPG_APIS-reference.html#GUID-7F18F9CD-2496-419E-AA0B-892E9414DA29"
                        },
                        {
                            "title":"<span class=\"secnum\">5.32 </span> OPG_APIS.GET_BUILD_ID",
                            "href":"OPG_APIS-reference.html#GUID-6127571F-6216-4B13-B4D4-9DBDAC967C0E"
                        },
                        {
                            "title":"<span class=\"secnum\">5.33 </span> OPG_APIS.GET_GEOMETRY_FROM_V_COL",
                            "href":"OPG_APIS-reference.html#GUID-4B102EF0-9BAA-4C98-B483-6E7388A2AA1D"
                        },
                        {
                            "title":"<span class=\"secnum\">5.34 </span> OPG_APIS.GET_GEOMETRY_FROM_V_T_COLS",
                            "href":"OPG_APIS-reference.html#GUID-0150DE12-7AAF-4973-B204-90D73FECF157"
                        },
                        {
                            "title":"<span class=\"secnum\">5.35 </span> OPG_APIS.GET_LATLONG_FROM_V_COL",
                            "href":"OPG_APIS-reference.html#GUID-FA4C3C01-E24A-472D-8142-D9CE69A6717E"
                        },
                        {
                            "title":"<span class=\"secnum\">5.36 </span> OPG_APIS.GET_LATLONG_FROM_V_T_COLS",
                            "href":"OPG_APIS-reference.html#GUID-230553EB-CB1E-4CD0-856B-09DF29980F65"
                        },
                        {
                            "title":"<span class=\"secnum\">5.37 </span> OPG_APIS.GET_LONG_LAT_GEOMETRY",
                            "href":"OPG_APIS-reference.html#GUID-3DFA2CBD-3569-4E3C-9F69-D7B63924332D"
                        },
                        {
                            "title":"<span class=\"secnum\">5.38 </span> OPG_APIS.GET_LATLONG_FROM_V_COL",
                            "href":"OPG_APIS-reference.html#unique_174579749"
                        },
                        {
                            "title":"<span class=\"secnum\">5.39 </span> OPG_APIS.GET_LONGLAT_FROM_V_T_COLS",
                            "href":"OPG_APIS-reference.html#GUID-F30BC20A-64C3-48FA-A7BF-056C6165A786"
                        },
                        {
                            "title":"<span class=\"secnum\">5.40 </span> OPG_APIS.GET_SCN",
                            "href":"OPG_APIS-reference.html#GUID-4F023BE3-1EDC-4BFB-81DF-753D63746699"
                        },
                        {
                            "title":"<span class=\"secnum\">5.41 </span> OPG_APIS.GET_VERSION",
                            "href":"OPG_APIS-reference.html#GUID-AA076755-27C8-45EA-B181-95D3D1BEE761"
                        },
                        {
                            "title":"<span class=\"secnum\">5.42 </span> OPG_APIS.GET_WKTGEOMETRY_FROM_V_COL",
                            "href":"OPG_APIS-reference.html#GUID-6C1A3DDE-48F2-4A79-AD16-3CCE576D5545"
                        },
                        {
                            "title":"<span class=\"secnum\">5.43 </span> OPG_APIS.GET_WKTGEOMETRY_FROM_V_T_COLS",
                            "href":"OPG_APIS-reference.html#GUID-B24DF56A-18BB-4D6E-B325-BBA173CC359B"
                        },
                        {
                            "title":"<span class=\"secnum\">5.44 </span> OPG_APIS.GRANT_ACCESS",
                            "href":"OPG_APIS-reference.html#GUID-C1CF4953-17A5-4C2B-8E35-0C82EA69DD14"
                        },
                        {
                            "title":"<span class=\"secnum\">5.45 </span> OPG_APIS.IMP_EDGE_TAB_STATS",
                            "href":"OPG_APIS-reference.html#GUID-08FC0959-024E-43C9-A202-04E8D952764E"
                        },
                        {
                            "title":"<span class=\"secnum\">5.46 </span> OPG_APIS.IMP_VERTEX_TAB_STATS",
                            "href":"OPG_APIS-reference.html#GUID-7EAFC523-176F-48CE-A7A7-6FE21AD5D7A1"
                        },
                        {
                            "title":"<span class=\"secnum\">5.47 </span> OPG_APIS.PR",
                            "href":"OPG_APIS-reference.html#GUID-C6B7FB6D-D697-41F0-8C50-48F85420167F"
                        },
                        {
                            "title":"<span class=\"secnum\">5.48 </span> OPG_APIS.PR_CLEANUP",
                            "href":"OPG_APIS-reference.html#GUID-E6662E41-9857-4FB7-A57A-2B0396A39057"
                        },
                        {
                            "title":"<span class=\"secnum\">5.49 </span> OPG_APIS.PR_PREP",
                            "href":"OPG_APIS-reference.html#GUID-E9B709B5-1801-49A9-88BE-6525318102C9"
                        },
                        {
                            "title":"<span class=\"secnum\">5.50 </span> OPG_APIS.PREPARE_TEXT_INDEX",
                            "href":"OPG_APIS-reference.html#GUID-726B7DD8-471E-4A81-A9F3-BC94174B0424"
                        },
                        {
                            "title":"<span class=\"secnum\">5.51 </span> OPG_APIS.RENAME_PG",
                            "href":"OPG_APIS-reference.html#GUID-B7511FDC-AA7E-47A2-8595-D740B0CBABD2"
                        },
                        {
                            "title":"<span class=\"secnum\">5.52 </span> OPG_APIS.SPARSIFY_GRAPH",
                            "href":"OPG_APIS-reference.html#GUID-E8F47437-1B83-4352-9F49-0A719CCD381D"
                        },
                        {
                            "title":"<span class=\"secnum\">5.53 </span> OPG_APIS.SPARSIFY_GRAPH_CLEANUP",
                            "href":"OPG_APIS-reference.html#GUID-35749BBA-9C43-462A-8EF6-D1FC6EE9592B"
                        },
                        {
                            "title":"<span class=\"secnum\">5.54 </span> OPG_APIS.SPARSIFY_GRAPH_PREP",
                            "href":"OPG_APIS-reference.html#GUID-CEB828AA-3E00-42A6-9C70-BA20FC13BCE4"
                        }
                    ]
                },
                {
                    "title":"<span class=\"secnum\">6 </span> OPG_GRAPHOP Package Subprograms",
                    "href":"OPG_GRAPHOP-reference.html#GUID-314EE15F-DB4C-4437-8D6D-CD7BC08034DC",
                    "topics":[
                        {
                            "title":"<span class=\"secnum\">6.1 </span> OPG_GRAPHOP.POPULATE_SKELETON_TAB",
                            "href":"OPG_GRAPHOP-reference.html#GUID-A2BB34A3-D342-429C-961F-5858BBE301CD"
                        }
                    ]
                },
                {
                    "title":"Supplementary Information for Property Graph Support",
                    "href":"supplementary-information-property-graph-support.html",
                    "topics":[
                        {
                            "title":"<span class=\"secnum\">A </span> Tinkerpop 3 APIs: Differences and Other Notes",
                            "href":"tinkerpop-3-apis.html#GUID-F3E9FD4E-6C2A-459B-9513-5078592C930A",
                            "topics":[
                                {
                                    "title":"<span class=\"secnum\">A.1 </span> TinkerPop 3 Graph APIs",
                                    "href":"tinkerpop-3-apis.html#GUID-8A390268-6C92-4F0E-8FCA-E65411EADCAC"
                                },
                                {
                                    "title":"<span class=\"secnum\">A.2 </span> TinkerPop 3 Vertex APIs",
                                    "href":"tinkerpop-3-apis.html#GUID-E8E475E6-5229-4C7D-ACB5-8F4ED2D3051A"
                                },
                                {
                                    "title":"<span class=\"secnum\">A.3 </span> TinkerPop 3 Edge APIs",
                                    "href":"tinkerpop-3-apis.html#GUID-78CA8755-BFC8-4EAE-857B-FAF2C4B52462"
                                }
                            ]
                        }
                    ]
                },
                {
                    "title":"Index",
                    "href":"book-index.html"
                }
            ]
        }
    ]
});