define(
{
    "toc":[
        {
            "heading":"Table of Contents",
            "topics":[
                {
                    "title":"Title and Copyright Information",
                    "href":"index.html"
                },
                {
                    "title":"Preface",
                    "href":"preface.html#GUID-79083DA0-4E6B-48CB-B296-00FC58BE60D7",
                    "topics":[
                        {
                            "title":"Audience",
                            "href":"preface.html#GUID-69F59FD6-3C5E-476C-81C9-BC3CBA05BFEA"
                        },
                        {
                            "title":"Documentation Accessibility",
                            "href":"preface.html#GUID-E409CC44-9A8F-4043-82C8-6B95CD939296"
                        },
                        {
                            "title":"Related Documents",
                            "href":"preface.html#GUID-EA0AA870-CF55-4B97-9AB4-82A657FA1D09"
                        },
                        {
                            "title":"Conventions",
                            "href":"preface.html#GUID-C483CA87-A5BB-4E53-B7E1-4272FADC8F7C"
                        }
                    ]
                },
                {
                    "title":"Changes in This Release for Oracle Universal Connection Pool Developer's Guide",
                    "href":"release-changes.html#GUID-97199BCC-A97C-40D6-A1D0-0B841BE5CF5B",
                    "topics":[
                        {
                            "title":"Changes in Oracle Database 19c",
                            "href":"release-changes.html#GUID-EA293160-841B-49FE-A308-A03F0F71C10E",
                            "topics":[
                                {
                                    "title":"New Features",
                                    "href":"release-changes.html#GUID-58821367-FA91-491E-B029-D3307F8395B1"
                                }
                            ]
                        }
                    ]
                },
                {
                    "title":"<span class=\"secnum\">1 </span> Introduction to UCP",
                    "href":"intro.html#GUID-82ACD002-4C5F-4BF7-99FF-46A2A97DD35D",
                    "topics":[
                        {
                            "title":"<span class=\"secnum\">1.1 </span> Overview of Connection Pool",
                            "href":"intro.html#GUID-DEC07CE5-F791-4234-BBF9-5C808169BCD2"
                        },
                        {
                            "title":"<span class=\"secnum\">1.2 </span> Benefits of Using a Connection Pool",
                            "href":"intro.html#GUID-C9CD25A8-67F5-4C27-8E48-BC21C8BE8D83"
                        },
                        {
                            "title":"<span class=\"secnum\">1.3 </span> Overview of Universal Connection Pool",
                            "href":"intro.html#GUID-F9DE0E14-C0D9-40E7-99A3-AC207CE9DF14",
                            "topics":[
                                {
                                    "title":"<span class=\"secnum\">1.3.1 </span> Conceptual Architecture",
                                    "href":"intro.html#GUID-197BA5D3-86DA-43BE-AFC6-E8CBED4883EF"
                                },
                                {
                                    "title":"<span class=\"secnum\">1.3.2 </span> Connection Pool Properties",
                                    "href":"intro.html#GUID-6079BADD-2E36-4B2E-8B9D-11139B145E3B"
                                },
                                {
                                    "title":"<span class=\"secnum\">1.3.3 </span> Connection Pool Manager",
                                    "href":"intro.html#GUID-8CF6555B-E7EA-462C-88C8-78678E43BD17"
                                },
                                {
                                    "title":"<span class=\"secnum\">1.3.4 </span> High Availability and Performance Scenarios",
                                    "href":"intro.html#GUID-62AA5435-AF73-4E81-97B6-2A36D1F7ECF7"
                                },
                                {
                                    "title":"<span class=\"secnum\">1.3.5 </span> Support for Java library for Reactive Streams Ingestion",
                                    "href":"intro.html#GUID-ACCDDB95-1D82-4C61-9550-F0339DADA9F4"
                                }
                            ]
                        }
                    ]
                },
                {
                    "title":"<span class=\"secnum\">2 </span> Getting Started",
                    "href":"get-started.html#GUID-7438ABC8-6AC0-437E-9D19-60D60E73E9C6",
                    "topics":[
                        {
                            "title":"<span class=\"secnum\">2.1 </span> Requirements for using UCP",
                            "href":"get-started.html#GUID-009ADAD2-067D-4669-9423-A72E31AFC07F"
                        },
                        {
                            "title":"<span class=\"secnum\">2.2 </span> Basic Connection Steps in UCP",
                            "href":"get-started.html#GUID-BD0FA045-1DB1-4719-8CB8-AF58CCBA92DC",
                            "topics":[
                                {
                                    "title":"<span class=\"secnum\">2.2.1 </span> Authentication in UCP",
                                    "href":"get-started.html#GUID-41E11058-F862-4389-8EA2-B1720FAED591"
                                }
                            ]
                        },
                        {
                            "title":"<span class=\"secnum\">2.3 </span> UCP API Overview",
                            "href":"get-started.html#GUID-0AB8FEDC-DC8A-4E63-BC4F-C35EA443DBED"
                        },
                        {
                            "title":"<span class=\"secnum\">2.4 </span> Basic Connection Example Using UCP",
                            "href":"get-started.html#GUID-2CC8D6EC-483F-4942-88BA-C0A1A1B68226"
                        }
                    ]
                },
                {
                    "title":"<span class=\"secnum\">3 </span> Getting Database Connections in UCP",
                    "href":"getting-database-connections.html#GUID-5E13DF84-005B-41D3-99C6-7E3120EB3C93",
                    "topics":[
                        {
                            "title":"<span class=\"secnum\">3.1 </span> About Borrowing Connections from UCP",
                            "href":"borrowing-ucp-connections.html#GUID-2AB7C67B-E634-4EBD-9383-7086FD672617",
                            "topics":[
                                {
                                    "title":"<span class=\"secnum\">3.1.1 </span> Overview of Borrowing Connections from UCP",
                                    "href":"borrowing-ucp-connections.html#GUID-434C7A5A-C0D9-4CB4-BBBC-CC1B3F27A56D"
                                },
                                {
                                    "title":"<span class=\"secnum\">3.1.2 </span> Using the Pool-Enabled Data Source",
                                    "href":"borrowing-ucp-connections.html#GUID-DC1FB036-E07C-490E-B8EB-A05D5F46909E"
                                },
                                {
                                    "title":"<span class=\"secnum\">3.1.3 </span> Using the Pool-Enabled XA Data Source",
                                    "href":"borrowing-ucp-connections.html#GUID-6EDE4770-D197-4ABA-9A4B-FE1D434BFEDF"
                                },
                                {
                                    "title":"<span class=\"secnum\">3.1.4 </span> Setting Connection Properties",
                                    "href":"borrowing-ucp-connections.html#GUID-E0DDAD88-925B-4F92-BE07-22D084BA6B3E"
                                },
                                {
                                    "title":"<span class=\"secnum\">3.1.5 </span> Using JNDI to Borrow a Connection",
                                    "href":"borrowing-ucp-connections.html#GUID-44F415AE-9B73-4834-9C67-04FE7B4A59DD"
                                },
                                {
                                    "title":"<span class=\"secnum\">3.1.6 </span> About Connection Initialization Callback",
                                    "href":"borrowing-ucp-connections.html#GUID-466F2D15-0811-40F0-8DF3-1F5518F49C82",
                                    "topics":[
                                        {
                                            "title":"<span class=\"secnum\">3.1.6.1 </span> Overview of Connection Initialization Callback",
                                            "href":"borrowing-ucp-connections.html#GUID-43994D45-B1D7-44E1-AE20-6BC5A055AB90"
                                        },
                                        {
                                            "title":"<span class=\"secnum\">3.1.6.2 </span> Creating an Initialization Callback",
                                            "href":"borrowing-ucp-connections.html#GUID-B406C378-5E60-4D64-A0D8-A55B7D55912A"
                                        },
                                        {
                                            "title":"<span class=\"secnum\">3.1.6.3 </span> Registering an Initialization Callback",
                                            "href":"borrowing-ucp-connections.html#GUID-7739FB00-31FB-4558-A85D-248C66B9EBF2"
                                        },
                                        {
                                            "title":"<span class=\"secnum\">3.1.6.4 </span> Removing or Unregistering an Initialization Callback",
                                            "href":"borrowing-ucp-connections.html#GUID-4B6E7E87-9417-4AC5-ADC5-21884277A555"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "title":"<span class=\"secnum\">3.2 </span> Setting Connection Pool Properties for UCP",
                            "href":"setting-ucp-properties.html#GUID-8FA8829A-80E8-43A4-B241-C3E7E80FEEDE"
                        },
                        {
                            "title":"<span class=\"secnum\">3.3 </span> Overview of Validating Connections in UCP",
                            "href":"validating-ucp-connections.html#GUID-A7C850D6-4026-4629-BCFA-9181C29EFBF9",
                            "topics":[
                                {
                                    "title":"<span class=\"secnum\">3.3.1 </span> Validating When Borrowing",
                                    "href":"validating-ucp-connections.html#GUID-211C9AFC-6ABA-4FEB-B10C-B0E2BEB526FD"
                                },
                                {
                                    "title":"<span class=\"secnum\">3.3.2 </span> Minimizing Connection Validation with setSecondsToTrustIdleConnection() Method",
                                    "href":"validating-ucp-connections.html#GUID-139508B9-1456-41CA-A860-2AFD9352C1E6"
                                },
                                {
                                    "title":"<span class=\"secnum\">3.3.3 </span> Checking If a Connection Is Valid",
                                    "href":"validating-ucp-connections.html#GUID-39E5A876-8C54-423F-B6A7-5E827DE202C7"
                                }
                            ]
                        },
                        {
                            "title":"<span class=\"secnum\">3.4 </span> Returning Borrowed Connections to UCP",
                            "href":"returning-borrowed-connections.html#GUID-FC52575A-B60E-4528-8AD6-B50E923C8E7E"
                        },
                        {
                            "title":"<span class=\"secnum\">3.5 </span> Removing Connections from UCP",
                            "href":"removing-connections.html#GUID-C49B5866-005C-493B-BD0A-139E67AE1A74"
                        },
                        {
                            "title":"<span class=\"secnum\">3.6 </span> UCP Integration with Third-Party Products",
                            "href":"third-party-integration.html#GUID-389CABB3-2890-42F6-8EEF-F8779AF90ECA"
                        }
                    ]
                },
                {
                    "title":"<span class=\"secnum\">4 </span> Optimizing Universal Connection Pool Behavior",
                    "href":"optimizing-ucp-behavior.html#GUID-FFCAB66D-45B3-4D7B-991B-40F1480630FD",
                    "topics":[
                        {
                            "title":"<span class=\"secnum\">4.1 </span> Optimizing Connection Pools",
                            "href":"optimizing-connection-pools.html#GUID-B889EA72-103B-4AE4-AED8-D98FCCCA7E01"
                        },
                        {
                            "title":"<span class=\"secnum\">4.2 </span> About Controlling the Pool Size in UCP",
                            "href":"controlling-pool-size.html#GUID-1909EBD1-E526-4385-9A2A-39C89F985A14",
                            "topics":[
                                {
                                    "title":"<span class=\"secnum\">4.2.1 </span> Setting the Initial Pool Size",
                                    "href":"controlling-pool-size.html#GUID-09AAF75B-CFA4-4CFF-8F5A-2D237078C5ED"
                                },
                                {
                                    "title":"<span class=\"secnum\">4.2.2 </span> Setting the Minimum Pool Size",
                                    "href":"controlling-pool-size.html#GUID-3461FA2F-80DF-490F-A754-6031DC165BF5"
                                },
                                {
                                    "title":"<span class=\"secnum\">4.2.3 </span> Setting the Maximum Pool Size",
                                    "href":"controlling-pool-size.html#GUID-80724EDA-5D83-46CF-B496-BB68F1F12628"
                                }
                            ]
                        },
                        {
                            "title":"<span class=\"secnum\">4.3 </span> About Optimizing Real-World Performance with Static Connection Pools",
                            "href":"optimizing-real-world-performance.html#GUID-BC09F045-5D80-4AF5-93F5-FEF0531E0E1D"
                        },
                        {
                            "title":"<span class=\"secnum\">4.4 </span> Stale Connections in UCP",
                            "href":"stale-ucp-connections.html#GUID-B441E4C1-D944-4F04-9A63-1E4F811A2474",
                            "topics":[
                                {
                                    "title":"<span class=\"secnum\">4.4.1 </span> What is Connection Reuse?",
                                    "href":"stale-ucp-connections.html#GUID-4958D16C-3209-48C7-94A8-4DEBFEA64D43",
                                    "topics":[
                                        {
                                            "title":"<span class=\"secnum\">4.4.1.1 </span> Setting the Maximum Connection Reuse Time",
                                            "href":"stale-ucp-connections.html#GUID-84A56318-AB65-448F-A9C3-8B12FAF477DF"
                                        },
                                        {
                                            "title":"<span class=\"secnum\">4.4.1.2 </span> Setting the Maximum Connection Reuse Count",
                                            "href":"stale-ucp-connections.html#GUID-20E97599-F984-4405-987D-6BAC019A50F7"
                                        }
                                    ]
                                },
                                {
                                    "title":"<span class=\"secnum\">4.4.2 </span> Setting the Connection Validation Timeout",
                                    "href":"stale-ucp-connections.html#GUID-ECB691EB-2B82-45A8-9D8F-00949A57BCE1"
                                },
                                {
                                    "title":"<span class=\"secnum\">4.4.3 </span> Setting the Abandon Connection Timeout",
                                    "href":"stale-ucp-connections.html#GUID-BA20F6C3-7369-4FD1-9D13-D24DFEB6D627"
                                },
                                {
                                    "title":"<span class=\"secnum\">4.4.4 </span> Setting the Time-To-Live Connection Timeout",
                                    "href":"stale-ucp-connections.html#GUID-7636DFE0-323D-4DCC-BF75-4597D25D80C7"
                                },
                                {
                                    "title":"<span class=\"secnum\">4.4.5 </span> Setting the Connection Wait Timeout",
                                    "href":"stale-ucp-connections.html#GUID-832A537F-B76C-4A02-BDDE-CD30A2AF6656"
                                },
                                {
                                    "title":"<span class=\"secnum\">4.4.6 </span> Setting the Inactive Connection Timeout",
                                    "href":"stale-ucp-connections.html#GUID-DFDC65C5-7A00-4591-9AD2-5DBB1D1EA770"
                                },
                                {
                                    "title":"<span class=\"secnum\">4.4.7 </span> Setting the Query Timeout",
                                    "href":"stale-ucp-connections.html#GUID-5807FD33-1086-4A03-B1BD-37A1EC318563"
                                },
                                {
                                    "title":"<span class=\"secnum\">4.4.8 </span> Setting the Timeout Check Interval",
                                    "href":"stale-ucp-connections.html#GUID-7D3909F5-BD8E-4F8F-BA19-78554F01EEDA"
                                }
                            ]
                        },
                        {
                            "title":"<span class=\"secnum\">4.5 </span> About Harvesting Connections in UCP",
                            "href":"harvesting-connections.html#GUID-1639B871-C332-4F30-8EE0-F753FF07BFB7",
                            "topics":[
                                {
                                    "title":"<span class=\"secnum\">4.5.1 </span> Overview of Harvesting Connections in UCP",
                                    "href":"harvesting-connections.html#GUID-9E1830DD-D7BD-414C-8706-5303EDA8B8C4"
                                },
                                {
                                    "title":"<span class=\"secnum\">4.5.2 </span> Setting a Connection to Harvestable",
                                    "href":"harvesting-connections.html#GUID-134CA847-2A70-4018-BE5C-03A0AAEFA462"
                                },
                                {
                                    "title":"<span class=\"secnum\">4.5.3 </span> Setting the Harvest Trigger Count",
                                    "href":"harvesting-connections.html#GUID-4E5EF90A-C571-4CD8-AE3E-A52B13C34B50"
                                },
                                {
                                    "title":"<span class=\"secnum\">4.5.4 </span> Setting the Harvest Maximum Count",
                                    "href":"harvesting-connections.html#GUID-E15544F5-82FA-4290-A9DF-60E1A0F777EE"
                                }
                            ]
                        },
                        {
                            "title":"<span class=\"secnum\">4.6 </span> About Caching SQL Statements in UCP",
                            "href":"caching-sql-statements.html#GUID-D3E63627-6FA4-455B-AC0F-C6CF538AA3D4",
                            "topics":[
                                {
                                    "title":"<span class=\"secnum\">4.6.1 </span> Overview of Statement Caching in UCP",
                                    "href":"caching-sql-statements.html#GUID-2EF3E9F2-263F-440A-9574-C0AAE98FF837"
                                },
                                {
                                    "title":"<span class=\"secnum\">4.6.2 </span> Enabling Statement Caching in UCP",
                                    "href":"caching-sql-statements.html#GUID-B8E0DD7F-BED5-4420-8B60-9C062DA5FCC5"
                                }
                            ]
                        }
                    ]
                },
                {
                    "title":"<span class=\"secnum\">5 </span> Labeling Connections in UCP",
                    "href":"labeling-ucp-connections.html#GUID-FF477DDE-FAE6-4E42-9B45-C3003CDB0DDF",
                    "topics":[
                        {
                            "title":"<span class=\"secnum\">5.1 </span> Overview of Labeling Connections in UCP",
                            "href":"overview-labeling-ucp-connections.html#GUID-566DB81D-1930-4B98-A7DC-E2DADF9B9C6D"
                        },
                        {
                            "title":"<span class=\"secnum\">5.2 </span> Implementation of a Labeling Callback in UCP",
                            "href":"implementing-labeling-ucp-connections.html#GUID-47A8BF36-AA20-4FBE-948A-C72722524436",
                            "topics":[
                                {
                                    "title":"<span class=\"secnum\">5.2.1 </span> When to Use a Labeling Callback in UCP",
                                    "href":"implementing-labeling-ucp-connections.html#GUID-86AF8FCA-5DC8-44BF-8F56-F0967521A713"
                                },
                                {
                                    "title":"<span class=\"secnum\">5.2.2 </span> Creating a Labeling Callback in UCP",
                                    "href":"implementing-labeling-ucp-connections.html#GUID-B39EA55E-48A7-454A-8756-BAC5588A3868",
                                    "topics":[
                                        {
                                            "title":"<span class=\"secnum\">5.2.2.1 </span> Example of Labeling Callback in UCP",
                                            "href":"implementing-labeling-ucp-connections.html#GUID-5B3465BD-4479-45D0-8E01-39B181A12312"
                                        }
                                    ]
                                },
                                {
                                    "title":"<span class=\"secnum\">5.2.3 </span> Registering a Labeling Callback in UCP",
                                    "href":"implementing-labeling-ucp-connections.html#GUID-B017B3A0-C7F0-4715-B36F-7592AC7DEBDF"
                                },
                                {
                                    "title":"<span class=\"secnum\">5.2.4 </span> Removing a Labeling Callback in UCP",
                                    "href":"implementing-labeling-ucp-connections.html#GUID-A14A9D8E-71B6-4A35-8E0D-48F4D913480C"
                                }
                            ]
                        },
                        {
                            "title":"<span class=\"secnum\">5.3 </span> Integration of UCP with DRCP",
                            "href":"ucp-drcp-integration.html#GUID-54A8CF56-1FBD-4F4B-BE7E-CB169E9435F1"
                        },
                        {
                            "title":"<span class=\"secnum\">5.4 </span> Applying Connection Labels in UCP",
                            "href":"applying-connection-labels.html#GUID-00D7FD1B-DD59-4AD0-8FC5-86BC4B79793B"
                        },
                        {
                            "title":"<span class=\"secnum\">5.5 </span> Borrowing Labeled Connections from UCP",
                            "href":"borrowing-labeled-connections.html#GUID-D5675784-7FCD-43B7-9973-7EA4A930A955"
                        },
                        {
                            "title":"<span class=\"secnum\">5.6 </span> Checking Unmatched Labels in UCP",
                            "href":"checking-unmatched-labels.html#GUID-C806ECE8-335D-4BBB-984F-04404CC99526"
                        },
                        {
                            "title":"<span class=\"secnum\">5.7 </span> Removing a Connection Label in UCP",
                            "href":"removing-connection-labels.html#GUID-070C5A60-4A2C-4BC8-93DC-CEDF24CC389A"
                        }
                    ]
                },
                {
                    "title":"<span class=\"secnum\">6 </span> Controlling Reclaimable Connection Behavior",
                    "href":"controlling-reclaimable-connection-behavior.html#GUID-B13613CF-F472-43BD-8ED0-4561C1449C14",
                    "topics":[
                        {
                            "title":"<span class=\"secnum\">6.1 </span> AbandonedConnectionTimeoutCallback Interface",
                            "href":"controlling-reclaimable-connection-behavior.html#GUID-3DFBBC68-DFE9-44C9-A4FB-8FFEF20B5BE6"
                        },
                        {
                            "title":"<span class=\"secnum\">6.2 </span> TimeToLiveConnectionTimeoutCallback Interface",
                            "href":"controlling-reclaimable-connection-behavior.html#GUID-B55502FA-B851-4076-8D50-C8378392936A"
                        }
                    ]
                },
                {
                    "title":"<span class=\"secnum\">7 </span> Using the Connection Pool Manager",
                    "href":"using-ucp-manager.html#GUID-14734102-0179-47A6-9484-4F75B01D765F",
                    "topics":[
                        {
                            "title":"<span class=\"secnum\">7.1 </span> Overview of Using the UCP Manager",
                            "href":"overview-using-ucp-manager.html#GUID-8932E6BA-EF64-442D-9E43-4FC6B7046E11",
                            "topics":[
                                {
                                    "title":"<span class=\"secnum\">7.1.1 </span> About Connection Pool Manager",
                                    "href":"overview-using-ucp-manager.html#GUID-C34A192A-13AB-4BCA-B84C-FD53FC61885A"
                                },
                                {
                                    "title":"<span class=\"secnum\">7.1.2 </span> Creating a Connection Pool Manager for UCP",
                                    "href":"overview-using-ucp-manager.html#GUID-3757F854-3800-49FA-936E-2AC4C91CD5F1"
                                },
                                {
                                    "title":"<span class=\"secnum\">7.1.3 </span> Life Cycle States of a Connection",
                                    "href":"overview-using-ucp-manager.html#GUID-2652F7EE-B799-4B5F-9CC0-9C0BC291C8E4",
                                    "topics":[
                                        {
                                            "title":"<span class=\"secnum\">7.1.3.1 </span> Creating a Connection Pool",
                                            "href":"overview-using-ucp-manager.html#GUID-02E7806B-F72F-43B6-A2BE-9EB0C558FFBA"
                                        },
                                        {
                                            "title":"<span class=\"secnum\">7.1.3.2 </span> Starting a Connection Pool",
                                            "href":"overview-using-ucp-manager.html#GUID-217A044B-F58E-46C9-B72A-EADB44A03816"
                                        },
                                        {
                                            "title":"<span class=\"secnum\">7.1.3.3 </span> Stopping a Connection Pool",
                                            "href":"overview-using-ucp-manager.html#GUID-3359C60C-385F-4FCE-B9E8-814C12180DCF"
                                        },
                                        {
                                            "title":"<span class=\"secnum\">7.1.3.4 </span> Destroying a Connection Pool",
                                            "href":"overview-using-ucp-manager.html#GUID-3C734CAE-3DF8-4AC7-ADAA-925EF9BFF38D"
                                        }
                                    ]
                                },
                                {
                                    "title":"<span class=\"secnum\">7.1.4 </span> Maintenance of Universal Connection Pool",
                                    "href":"overview-using-ucp-manager.html#GUID-366FBBD8-B19D-442C-AD11-979FCB418833",
                                    "topics":[
                                        {
                                            "title":"<span class=\"secnum\">7.1.4.1 </span> Refreshing a Connection Pool",
                                            "href":"overview-using-ucp-manager.html#GUID-FD2FAA44-2C64-43CA-95BB-6A24188048DF"
                                        },
                                        {
                                            "title":"<span class=\"secnum\">7.1.4.2 </span> Recycling a Connection Pool",
                                            "href":"overview-using-ucp-manager.html#GUID-5710C8FA-C0FB-4C1E-B8B2-45FD244342A6"
                                        },
                                        {
                                            "title":"<span class=\"secnum\">7.1.4.3 </span> Purging a Connection Pool",
                                            "href":"overview-using-ucp-manager.html#GUID-D557F1BD-95E6-4C57-80B3-4B3A28AC2530"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "title":"<span class=\"secnum\">7.2 </span> Overview of JMX-Based Management in UCP",
                            "href":"jmx-based-management.html#GUID-1D9CA0B0-80EC-47EB-863D-715E8B50A2B6",
                            "topics":[
                                {
                                    "title":"<span class=\"secnum\">7.2.1 </span> UniversalConnectionPoolManagerMBean",
                                    "href":"jmx-based-management.html#GUID-45F5D98E-AB12-4105-B937-5FD4FFC3E1D3"
                                },
                                {
                                    "title":"<span class=\"secnum\">7.2.2 </span> UniversalConnectionPoolMBean",
                                    "href":"jmx-based-management.html#GUID-8697136B-C45F-4522-BF38-EE0299889B07"
                                }
                            ]
                        }
                    ]
                },
                {
                    "title":"<span class=\"secnum\">8 </span> Shared Pool Support for Multitenant Data Sources",
                    "href":"shared-pool-for-multitenant-data-sources.html#GUID-7C397AA8-9C78-4DB0-AAF4-15BBF9AFFB85",
                    "topics":[
                        {
                            "title":"<span class=\"secnum\">8.1 </span> Overview of Shared Pool Support",
                            "href":"shared-pool-for-multitenant-data-sources.html#GUID-4945D8A0-7607-43BE-9F5C-A7CD526EFE46"
                        },
                        {
                            "title":"<span class=\"secnum\">8.2 </span> Prerequisites for Supporting Shared Pool",
                            "href":"shared-pool-for-multitenant-data-sources.html#GUID-E316D680-55B5-4A58-95D1-BC25ADF71113"
                        },
                        {
                            "title":"<span class=\"secnum\">8.3 </span> Configuring the Shared Pool",
                            "href":"shared-pool-for-multitenant-data-sources.html#GUID-5BB08487-DBCB-445F-8166-B815234209B1"
                        },
                        {
                            "title":"<span class=\"secnum\">8.4 </span> UCP APIs for Shared Pool Support",
                            "href":"shared-pool-for-multitenant-data-sources.html#GUID-DD1127BC-C049-4B9E-8D15-DEB8D0E695B3"
                        },
                        {
                            "title":"<span class=\"secnum\">8.5 </span> Sample XML Configuration File for Shared Pool",
                            "href":"shared-pool-for-multitenant-data-sources.html#GUID-35C35A0D-996A-49AD-BA2F-F4E0842F0221"
                        }
                    ]
                },
                {
                    "title":"<span class=\"secnum\">9 </span> Using Oracle RAC Features",
                    "href":"using-Oracle-RAC-features.html#GUID-A0B5E9FF-84E1-40FC-8B2E-084C1134FDFD",
                    "topics":[
                        {
                            "title":"<span class=\"secnum\">9.1 </span> Overview of Oracle RAC Features",
                            "href":"overview-Oracle-RAC-features.html#GUID-DA4D43E9-1656-4101-8868-DAA2BB9B34D4"
                        },
                        {
                            "title":"<span class=\"secnum\">9.2 </span> About Fast Connection Failover",
                            "href":"fast-connection-failover.html#GUID-126F8C9B-C0B3-426B-B07D-4B127BBDD867",
                            "topics":[
                                {
                                    "title":"<span class=\"secnum\">9.2.1 </span> Overview of Fast Connection Failover",
                                    "href":"fast-connection-failover.html#GUID-B8D3EAED-A8D8-47C9-9ECC-296B9D988763"
                                },
                                {
                                    "title":"<span class=\"secnum\">9.2.2 </span> What is Fast Connection Failover?",
                                    "href":"fast-connection-failover.html#GUID-1777BFF1-1FDB-4D3C-BA68-8DD165733F69",
                                    "topics":[
                                        {
                                            "title":"<span class=\"secnum\">9.2.2.1 </span> What the Application Sees",
                                            "href":"fast-connection-failover.html#GUID-AF352305-6B8F-47A9-BD73-1C7479E467BB"
                                        },
                                        {
                                            "title":"<span class=\"secnum\">9.2.2.2 </span> How FCF Works",
                                            "href":"fast-connection-failover.html#GUID-BD32FED1-6EE1-4148-A4C0-87A0A5E1DA85"
                                        }
                                    ]
                                },
                                {
                                    "title":"<span class=\"secnum\">9.2.3 </span> Fast Connection Failover Prerequisites",
                                    "href":"fast-connection-failover.html#GUID-DEBA115B-9B14-4C4C-83EB-7D09F9F48970"
                                },
                                {
                                    "title":"<span class=\"secnum\">9.2.4 </span> Example of Fast Connection Failover Configuration",
                                    "href":"fast-connection-failover.html#GUID-18F60DC2-A4C2-43D7-9BCB-628D09A1AC0F"
                                },
                                {
                                    "title":"<span class=\"secnum\">9.2.5 </span> Enabling Fast Connection Failover",
                                    "href":"fast-connection-failover.html#GUID-A85462D1-A4F1-43DC-869E-721AE30B7E78"
                                },
                                {
                                    "title":"<span class=\"secnum\">9.2.6 </span> What is ONS?",
                                    "href":"fast-connection-failover.html#GUID-F361FE59-9D12-47F9-B5DC-F5D996809AF4",
                                    "topics":[
                                        {
                                            "title":"<span class=\"secnum\">9.2.6.1 </span> Overview of ONS Configuration File",
                                            "href":"fast-connection-failover.html#GUID-0D8CD8C4-734F-49F7-8737-9AC03173C73F"
                                        },
                                        {
                                            "title":"<span class=\"secnum\">9.2.6.2 </span> Remote Configuration of ONS",
                                            "href":"fast-connection-failover.html#GUID-C8D5FF91-6333-4E7F-BC81-CF7B93D56BEE"
                                        },
                                        {
                                            "title":"<span class=\"secnum\">9.2.6.3 </span> Configuration of Client-Side ONS Daemon",
                                            "href":"fast-connection-failover.html#GUID-A78715A2-9F5A-4779-AFD7-5FDEC258DA63"
                                        }
                                    ]
                                },
                                {
                                    "title":"<span class=\"secnum\">9.2.7 </span> Configuring the Connection URL",
                                    "href":"fast-connection-failover.html#GUID-C54F3D4D-9973-41EA-B62B-E574DE94970F"
                                }
                            ]
                        },
                        {
                            "title":"<span class=\"secnum\">9.3 </span> About Run-Time Connection Load Balancing",
                            "href":"run-time-connection-load-balancing.html#GUID-305FD568-95F5-458C-8B52-5A81FA62999C",
                            "topics":[
                                {
                                    "title":"<span class=\"secnum\">9.3.1 </span> Overview of Run-Time Connection Load Balancing",
                                    "href":"run-time-connection-load-balancing.html#GUID-C4EBA4C5-8096-4704-AEE3-2382F5A3B7A9"
                                },
                                {
                                    "title":"<span class=\"secnum\">9.3.2 </span> Setting Up Run-Time Connection Load Balancing",
                                    "href":"run-time-connection-load-balancing.html#GUID-D4F244CC-1062-4E21-9032-5CEFF1976E73"
                                }
                            ]
                        },
                        {
                            "title":"<span class=\"secnum\">9.4 </span> About Connection Affinity",
                            "href":"connection-affinity.html#GUID-7F9764AD-2F53-4BAF-9E7E-0671C8936C1F",
                            "topics":[
                                {
                                    "title":"<span class=\"secnum\">9.4.1 </span> Overview of Connection Affinity",
                                    "href":"connection-affinity.html#GUID-C3B6DB15-959B-4971-A91E-7A70E7130D86",
                                    "topics":[
                                        {
                                            "title":"<span class=\"secnum\">9.4.1.1 </span> Transaction-Based Affinity",
                                            "href":"connection-affinity.html#GUID-858AE39F-2401-4884-A4BF-7BAB914645D3"
                                        },
                                        {
                                            "title":"<span class=\"secnum\">9.4.1.2 </span> Web Session Affinity",
                                            "href":"connection-affinity.html#GUID-E8C37198-F92B-4DAE-BA67-BD6115799A60"
                                        },
                                        {
                                            "title":"<span class=\"secnum\">9.4.1.3 </span> Oracle RAC Data Affinity",
                                            "href":"connection-affinity.html#GUID-AD235F70-10F6-4DF3-8CE4-91769B828DD3"
                                        }
                                    ]
                                },
                                {
                                    "title":"<span class=\"secnum\">9.4.2 </span> Setting Up Connection Affinity",
                                    "href":"connection-affinity.html#GUID-49974FDA-374A-412A-8298-220B3DAD32D2",
                                    "topics":[
                                        {
                                            "title":"<span class=\"secnum\">9.4.2.1 </span> Creating a Connection Affinity Callback",
                                            "href":"connection-affinity.html#GUID-A08B81FE-5FD6-49E0-89CD-37101B1A9838"
                                        },
                                        {
                                            "title":"<span class=\"secnum\">9.4.2.2 </span> Registering a Connection Affinity Callback",
                                            "href":"connection-affinity.html#GUID-D21521B5-5522-44A1-81EA-CC0514CE9D0F"
                                        },
                                        {
                                            "title":"<span class=\"secnum\">9.4.2.3 </span> Removing a Connection Affinity Callback",
                                            "href":"connection-affinity.html#GUID-B61FC328-1381-47A6-8C07-C87D5DB158BD"
                                        },
                                        {
                                            "title":"<span class=\"secnum\">9.4.2.4 </span> Strict Affinity Mode",
                                            "href":"connection-affinity.html#GUID-95BF450F-FEC8-4E43-BB1A-A5F7BC7D03D0"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "title":"<span class=\"secnum\">9.5 </span> Global Data Services",
                            "href":"global-data-services.html#GUID-97370C21-B4E5-4533-A66D-C6C1B3C15BCD",
                            "topics":[
                                {
                                    "title":"<span class=\"secnum\">9.5.1 </span> Overview of Global Data Services",
                                    "href":"global-data-services.html#GUID-786F3FBC-7A2D-4890-A7C6-536E7D30D7EA"
                                },
                                {
                                    "title":"<span class=\"secnum\">9.5.2 </span> Configuring an Application for Using GDS",
                                    "href":"global-data-services.html#GUID-34C99F3C-329F-477C-94B6-0B523276139F"
                                }
                            ]
                        }
                    ]
                },
                {
                    "title":"<span class=\"secnum\">10 </span> Ensuring Application Continuity",
                    "href":"application-continuity-using-ucp.html#GUID-E087EE2A-5429-4B64-9BC5-B540B2BBC36A",
                    "topics":[
                        {
                            "title":"<span class=\"secnum\">10.1 </span> Overview of Ensuring Application Continuity with UCP",
                            "href":"application-continuity-using-ucp.html#GUID-54F9FD1C-9301-40D3-999B-C74478E72DB0"
                        },
                        {
                            "title":"<span class=\"secnum\">10.2 </span> Configuring the Data Source for Application Continuity",
                            "href":"application-continuity-using-ucp.html#GUID-EA541BD8-7B19-4A28-BF29-C4A623B41EEC"
                        },
                        {
                            "title":"<span class=\"secnum\">10.3 </span> Using Connection Labeling for Application Continuity",
                            "href":"application-continuity-using-ucp.html#GUID-83526888-0AA4-4112-B962-4057D64F192B"
                        },
                        {
                            "title":"<span class=\"secnum\">10.4 </span> Using Connection Initialization Callback for Application Continuity",
                            "href":"application-continuity-using-ucp.html#GUID-2202F0CF-9F8F-4C52-BD42-F64BC8D83078"
                        }
                    ]
                },
                {
                    "title":"<span class=\"secnum\">11 </span> Shared Pool for Sharded Databases",
                    "href":"ucp-database-sharding-support.html#GUID-12685D3A-F083-433A-90DF-C5533009B841",
                    "topics":[
                        {
                            "title":"<span class=\"secnum\">11.1 </span> Overview of UCP Shared Pool for Database Sharding",
                            "href":"ucp-database-sharding-overview.html#GUID-A5722833-CFD6-4557-B983-88B5C657A74B"
                        },
                        {
                            "title":"<span class=\"secnum\">11.2 </span> About Handling Connection Requests for a Sharded Database",
                            "href":"sharded-database-connection-request.html#GUID-A0371FC7-5644-4AC7-AEFE-37BE974D6616",
                            "topics":[
                                {
                                    "title":"<span class=\"secnum\">11.2.1 </span> About Building the Sharding Key",
                                    "href":"sharded-database-connection-request.html#GUID-D0D95DEB-0B38-4F70-AA1D-D03CB045E328"
                                },
                                {
                                    "title":"<span class=\"secnum\">11.2.2 </span> How to Checkout Connections from a Pool with a Sharding Key",
                                    "href":"sharded-database-connection-request.html#GUID-3FA27C3E-58E9-4688-827A-77D855D852F0"
                                },
                                {
                                    "title":"<span class=\"secnum\">11.2.3 </span> About Checking Out Connections without Providing the Sharding Keys",
                                    "href":"sharded-database-connection-request.html#GUID-940C3FA5-5D67-42D5-BBA0-6632BCD71127"
                                },
                                {
                                    "title":"<span class=\"secnum\">11.2.4 </span> About Connecting to the Shard Catalog or Co-ordinator for Multi Shard Queries",
                                    "href":"sharded-database-connection-request.html#GUID-117FCA87-57BE-4A11-A752-6D3FB9C1B677"
                                },
                                {
                                    "title":"<span class=\"secnum\">11.2.5 </span> About Configuring the Number of Connections Per Shard",
                                    "href":"sharded-database-connection-request.html#GUID-40E98C33-2BB2-4787-B626-D5A4DD7DFDE5"
                                },
                                {
                                    "title":"<span class=\"secnum\">11.2.6 </span> Pool Connection Selection Algorithm During Connection Checkout",
                                    "href":"sharded-database-connection-request.html#GUID-B2C039D2-7169-406F-8497-305E5E58F9F6"
                                },
                                {
                                    "title":"<span class=\"secnum\">11.2.7 </span> Failover or Resharding Event Handling in UCP",
                                    "href":"sharded-database-connection-request.html#GUID-51CC6F8D-ECA0-479D-9107-7CAB2E4CA686"
                                }
                            ]
                        },
                        {
                            "title":"<span class=\"secnum\">11.3 </span> Middle-Tier Routing Using UCP",
                            "href":"middle-tier-routing-using-ucp.html#GUID-6B3483EE-6E38-4B76-AAAC-0192E5827C3A"
                        },
                        {
                            "title":"<span class=\"secnum\">11.4 </span> UCP APIs for Database Sharding Support",
                            "href":"ucp-sharding-api.html#GUID-3B91E8F7-AE45-4CC8-B87F-6F4FC9EEA001"
                        },
                        {
                            "title":"<span class=\"secnum\">11.5 </span> UCP APIs for Middle-Tier Routing Support",
                            "href":"ucp-apis-for-middle-tier-routing-support.html#GUID-312213B8-E68D-441A-8C1C-0D0EA93E02BB"
                        },
                        {
                            "title":"<span class=\"secnum\">11.6 </span> UCP Sharding Example",
                            "href":"ucp-sharding-example.html#GUID-EC693732-379A-4874-8507-FEF1DAB5F52A"
                        },
                        {
                            "title":"<span class=\"secnum\">11.7 </span> Middle-Tier Routing with UCP Example",
                            "href":"ucp-middle-tier-routing-example.html#GUID-CF5A2C43-7BCD-4977-AA6F-089708CEE75D"
                        }
                    ]
                },
                {
                    "title":"<span class=\"secnum\">12 </span> Diagnosing a Connection Pool",
                    "href":"diagnosing-ucp.html#GUID-ED0408D9-D3D6-44DA-91EE-5991C0EA8CAD",
                    "topics":[
                        {
                            "title":"<span class=\"secnum\">12.1 </span> Pool Statistics",
                            "href":"pool-statistics.html#GUID-E9E1CC73-F1D6-4A0E-9449-07106BC14EED"
                        },
                        {
                            "title":"<span class=\"secnum\">12.2 </span> Dynamic Monitoring Service Metrics",
                            "href":"dynamic-monitoring-service-metrics.html#GUID-47E4F8B3-9336-464D-8783-61DEB632B040"
                        },
                        {
                            "title":"<span class=\"secnum\">12.3 </span> About Viewing Oracle RAC Statistics",
                            "href":"viewing-Oracle-RAC-statistics.html#GUID-6ED3F083-8838-4EB2-B1F7-30D381D9BCE2",
                            "topics":[
                                {
                                    "title":"<span class=\"secnum\">12.3.1 </span> Fast Connection Failover Statistics",
                                    "href":"viewing-Oracle-RAC-statistics.html#GUID-CFDF27D8-E186-46C0-85FD-80DA0279AFB8"
                                },
                                {
                                    "title":"<span class=\"secnum\">12.3.2 </span> Run-Time Connection Load Balance Statistics",
                                    "href":"viewing-Oracle-RAC-statistics.html#GUID-96EE9C0F-96D4-4A34-87A2-0845270EED06"
                                },
                                {
                                    "title":"<span class=\"secnum\">12.3.3 </span> Connection Affinity Statistics",
                                    "href":"viewing-Oracle-RAC-statistics.html#GUID-045DE1B4-A866-4C52-94FC-BC22CC4FA108"
                                }
                            ]
                        },
                        {
                            "title":"<span class=\"secnum\">12.4 </span> Overview of Logging in UCP",
                            "href":"logging-in-ucp.html#GUID-E9148F7B-4B15-4302-8490-E89E6E04726F",
                            "topics":[
                                {
                                    "title":"<span class=\"secnum\">12.4.1 </span> Using a Logging Properties File",
                                    "href":"logging-in-ucp.html#GUID-E34D1A69-F418-4293-B28B-4389B4814431"
                                },
                                {
                                    "title":"<span class=\"secnum\">12.4.2 </span> Using UCP and JDK API",
                                    "href":"logging-in-ucp.html#GUID-D2B34151-96F7-45F6-B8C8-421BA2C72AE2"
                                },
                                {
                                    "title":"<span class=\"secnum\">12.4.3 </span> Enabling or Disabling Feature-Specific Logging at Runtime",
                                    "href":"logging-in-ucp.html#GUID-293E4B4A-55C4-4390-9BD3-C39629B65A42"
                                },
                                {
                                    "title":"<span class=\"secnum\">12.4.4 </span> About Using the Logging Properties File for Feature-Specific Logging",
                                    "href":"logging-in-ucp.html#GUID-14CCD520-A1BD-4542-BBB1-2D5357BF501E"
                                },
                                {
                                    "title":"<span class=\"secnum\">12.4.5 </span> Supported Log Levels",
                                    "href":"logging-in-ucp.html#GUID-B724F83A-8E69-4B19-BC8B-A8305E69A7B5"
                                }
                            ]
                        },
                        {
                            "title":"<span class=\"secnum\">12.5 </span> Exceptions and Error Codes",
                            "href":"exceptions-error-codes.html#GUID-1823BA23-9571-4579-AD0C-6AF3A4644D44"
                        }
                    ]
                },
                {
                    "title":"<span class=\"secnum\">A </span> Error Codes Reference",
                    "href":"error-codes-reference.html#GUID-13577739-E376-4B27-8DD7-7CCA993239B1",
                    "topics":[
                        {
                            "title":"<span class=\"secnum\">A.1 </span> General Structure of UCP Error Messages",
                            "href":"error-codes-reference.html#GUID-4805C8CC-34F8-4EC1-B2CA-7B0F0D60DCB1"
                        },
                        {
                            "title":"<span class=\"secnum\">A.2 </span> Connection Pool Layer Error Messages",
                            "href":"error-codes-reference.html#GUID-F75FBC01-C8D9-423E-93CC-B515F393E39A"
                        },
                        {
                            "title":"<span class=\"secnum\">A.3 </span> JDBC Data Sources and Dynamic Proxies Error Messages",
                            "href":"error-codes-reference.html#GUID-25D7CA54-63FB-400E-B26C-573B3DE74709"
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