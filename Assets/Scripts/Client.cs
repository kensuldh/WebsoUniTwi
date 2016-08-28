using UnityEngine;
using UnityEngine.UI;
using System.Collections;
using System.Collections.Generic;
using WebSocketSharp;
using WebSocketSharp.Net;

public class Client : MonoBehaviour
{

    public string WSAddress = "ws://127.0.0.1:3000";

    WebSocket ws;

    public GameObject RText;
    private string Receive;
    public Rigidbody2D Star;
    public Rigidbody2D Tsukuba;
    public Rigidbody2D Tanni;
    public Rigidbody2D Sun;
    public Rigidbody2D CresMoon;
    public Rigidbody2D FullMoon;
    public Rigidbody2D Earth;
    public Rigidbody2D Saturn;
    public Rigidbody2D Toeikikun;
    public Rigidbody2D Venus;
    public Rigidbody2D Uranus;
    public Rigidbody2D Pluto;
    public Rigidbody2D Neptune;
    public Rigidbody2D Mercury;
    public Rigidbody2D Mars;
    public Rigidbody2D Jupiter;
    public Rigidbody2D Aql;
    public Rigidbody2D Cyg;
    public Rigidbody2D Lyr;
    public Rigidbody2D Ori;
    public Rigidbody2D CMa;
    public Rigidbody2D CMi;
    public Rigidbody2D Tau;
    public Rigidbody2D Gem;
    public Rigidbody2D Vir;
    public Rigidbody2D Cnc;
    public Rigidbody2D Leo;
    public Rigidbody2D Sgr;
    public Rigidbody2D Sco;
    public Rigidbody2D Lib;
    public Rigidbody2D Ari;
    public Rigidbody2D Aqr;
    public Rigidbody2D Cap;
    public Rigidbody2D Psc;
    public Rigidbody2D UMa;
    public Rigidbody2D UMi;
    public Rigidbody2D Boo;
    public Rigidbody2D CVn;
    public Rigidbody2D Aur;
    public Rigidbody2D Cas;
    public Rigidbody2D Peg;
    public Rigidbody2D Per;
    public Rigidbody2D Her;
    public Rigidbody2D Gala;
    public Rigidbody2D ISS;
    //private float OriginZ = 0.8f;
    private char[] s;
    List<char> list = new List<char>();
    List<Rigidbody2D> body = new List<Rigidbody2D>();
    List<Rigidbody2D> body2 = new List<Rigidbody2D>();

    void Start()
    {

        
        //InitObject(Star);
        //InitObject(Tsukuba);
        
        Connect();

    }

    void Update()
    {
        for (int i = 0; i < list.Count; i++)
        {
            Rigidbody2D X;
            switch (list[0])
            {
                case 'a':
                    X = Instantiate(Star);
                    InitObject(X);
                    body.Add(X);
                    //body.Add(Instantiate(Star));
                    //InitObject(body[0]);
                    list.RemoveAt(0);
                    break;
                case 'b':
                    X = Instantiate(Tsukuba);
                    InitObject(X);
                    body.Add(X);
                    //body.Add(Instantiate(Tsukuba));
                    //InitObject(body[0]);
                    list.RemoveAt(0);
                    break;
                case 'c':
                    X = Instantiate(Tanni);
                    InitObject(X);
                    body.Add(X);
                    //body.Add(Instantiate(Tsukuba));
                    //InitObject(body[0]);
                    list.RemoveAt(0);
                    break;
                case 'd':
                    X = Instantiate(Sun);
                    InitObject(X);
                    body.Add(X);
                    //body.Add(Instantiate(Tsukuba));
                    //InitObject(body[0]);
                    list.RemoveAt(0);
                    break;
                case 'e':
                    X = Instantiate(CresMoon);
                    InitObject(X);
                    body.Add(X);
                    //body.Add(Instantiate(Tsukuba));
                    //InitObject(body[0]);
                    list.RemoveAt(0);
                    break;
                case 'f':
                    X = Instantiate(FullMoon);
                    InitObject(X);
                    body.Add(X);
                    //body.Add(Instantiate(Tsukuba));
                    //InitObject(body[0]);
                    list.RemoveAt(0);
                    break;
                case 'g':
                    X = Instantiate(Earth);
                    InitObject(X);
                    body.Add(X);
                    //body.Add(Instantiate(Tsukuba));
                    //InitObject(body[0]);
                    list.RemoveAt(0);
                    break;
                case 'h':
                    X = Instantiate(Saturn);
                    InitObject(X);
                    body.Add(X);
                    //body.Add(Instantiate(Tsukuba));
                    //InitObject(body[0]);
                    list.RemoveAt(0);
                    break;
                case 'i':
                    X = Instantiate(Toeikikun);
                    InitObject(X);
                    body.Add(X);
                    //body.Add(Instantiate(Tsukuba));
                    //InitObject(body[0]);
                    list.RemoveAt(0);
                    break;
                case 'j':
                    X = Instantiate(Venus);
                    InitObject(X);
                    body.Add(X);
                    //body.Add(Instantiate(Tsukuba));
                    //InitObject(body[0]);
                    list.RemoveAt(0);
                    break;
                case 'k':
                    X = Instantiate(Uranus);
                    InitObject(X);
                    body.Add(X);
                    //body.Add(Instantiate(Tsukuba));
                    //InitObject(body[0]);
                    list.RemoveAt(0);
                    break;
                case 'l':
                    X = Instantiate(Pluto);
                    InitObject(X);
                    body.Add(X);
                    //body.Add(Instantiate(Tsukuba));
                    //InitObject(body[0]);
                    list.RemoveAt(0);
                    break;
                case 'm':
                    X = Instantiate(Neptune);
                    InitObject(X);
                    body.Add(X);
                    //body.Add(Instantiate(Tsukuba));
                    //InitObject(body[0]);
                    list.RemoveAt(0);
                    break;
                case 'n':
                    X = Instantiate(Mercury);
                    InitObject(X);
                    body.Add(X);
                    //body.Add(Instantiate(Tsukuba));
                    //InitObject(body[0]);
                    list.RemoveAt(0);
                    break;
                case 'o':
                    X = Instantiate(Mars);
                    InitObject(X);
                    body.Add(X);
                    //body.Add(Instantiate(Tsukuba));
                    //InitObject(body[0]);
                    list.RemoveAt(0);
                    break;
                case 'p':
                    X = Instantiate(Jupiter);
                    InitObject(X);
                    body.Add(X);
                    //body.Add(Instantiate(Tsukuba));
                    //InitObject(body[0]);
                    list.RemoveAt(0);
                    break;
                case 'q':
                    X = Instantiate(Aql);
                    InitObject(X);
                    body.Add(X);
                    //body.Add(Instantiate(Tsukuba));
                    //InitObject(body[0]);
                    list.RemoveAt(0);
                    break;
                case 'r':
                    X = Instantiate(Cyg);
                    InitObject(X);
                    body.Add(X);
                    //body.Add(Instantiate(Tsukuba));
                    //InitObject(body[0]);
                    list.RemoveAt(0);
                    break;
                case 's':
                    X = Instantiate(Lyr);
                    InitObject(X);
                    body.Add(X);
                    //body.Add(Instantiate(Tsukuba));
                    //InitObject(body[0]);
                    list.RemoveAt(0);
                    break;
                case 't':
                    X = Instantiate(Ori);
                    InitObject(X);
                    body.Add(X);
                    //body.Add(Instantiate(Tsukuba));
                    //InitObject(body[0]);
                    list.RemoveAt(0);
                    break;
                case 'u':
                    X = Instantiate(CMa);
                    InitObject(X);
                    body.Add(X);
                    //body.Add(Instantiate(Tsukuba));
                    //InitObject(body[0]);
                    list.RemoveAt(0);
                    break;
                case 'v':
                    X = Instantiate(CMi);
                    InitObject(X);
                    body.Add(X);
                    //body.Add(Instantiate(Tsukuba));
                    //InitObject(body[0]);
                    list.RemoveAt(0);
                    break;
                case 'w':
                    X = Instantiate(Tau);
                    InitObject(X);
                    body.Add(X);
                    //body.Add(Instantiate(Tsukuba));
                    //InitObject(body[0]);
                    list.RemoveAt(0);
                    break;
                case 'x':
                    X = Instantiate(Gem);
                    InitObject(X);
                    body.Add(X);
                    //body.Add(Instantiate(Tsukuba));
                    //InitObject(body[0]);
                    list.RemoveAt(0);
                    break;
                case 'y':
                    X = Instantiate(Vir);
                    InitObject(X);
                    body.Add(X);
                    //body.Add(Instantiate(Tsukuba));
                    //InitObject(body[0]);
                    list.RemoveAt(0);
                    break;
                case 'z':
                    X = Instantiate(Cnc);
                    InitObject(X);
                    body.Add(X);
                    //body.Add(Instantiate(Tsukuba));
                    //InitObject(body[0]);
                    list.RemoveAt(0);
                    break;
                case '0':
                    X = Instantiate(Leo);
                    InitObject(X);
                    body.Add(X);
                    //body.Add(Instantiate(Tsukuba));
                    //InitObject(body[0]);
                    list.RemoveAt(0);
                    break;
                case '1':
                    X = Instantiate(Sgr);
                    InitObject(X);
                    body.Add(X);
                    //body.Add(Instantiate(Tsukuba));
                    //InitObject(body[0]);
                    list.RemoveAt(0);
                    break;
                case '2':
                    X = Instantiate(Sco);
                    InitObject(X);
                    body.Add(X);
                    //body.Add(Instantiate(Tsukuba));
                    //InitObject(body[0]);
                    list.RemoveAt(0);
                    break;
                case '3':
                    X = Instantiate(Lib);
                    InitObject(X);
                    body.Add(X);
                    //body.Add(Instantiate(Tsukuba));
                    //InitObject(body[0]);
                    list.RemoveAt(0);
                    break;
                case '4':
                    X = Instantiate(Ari);
                    InitObject(X);
                    body.Add(X);
                    //body.Add(Instantiate(Tsukuba));
                    //InitObject(body[0]);
                    list.RemoveAt(0);
                    break;
                case '5':
                    X = Instantiate(Aqr);
                    InitObject(X);
                    body.Add(X);
                    //body.Add(Instantiate(Tsukuba));
                    //InitObject(body[0]);
                    list.RemoveAt(0);
                    break;
                case '6':
                    X = Instantiate(Cap);
                    InitObject(X);
                    body.Add(X);
                    //body.Add(Instantiate(Tsukuba));
                    //InitObject(body[0]);
                    list.RemoveAt(0);
                    break;
                case '7':
                    X = Instantiate(Psc);
                    InitObject(X);
                    body.Add(X);
                    //body.Add(Instantiate(Tsukuba));
                    //InitObject(body[0]);
                    list.RemoveAt(0);
                    break;
                case '8':
                    X = Instantiate(UMa);
                    InitObject(X);
                    body.Add(X);
                    //body.Add(Instantiate(Tsukuba));
                    //InitObject(body[0]);
                    list.RemoveAt(0);
                    break;
                case '9':
                    X = Instantiate(CMi);
                    InitObject(X);
                    body.Add(X);
                    //body.Add(Instantiate(Tsukuba));
                    //InitObject(body[0]);
                    list.RemoveAt(0);
                    break;
                case 'A':
                    X = Instantiate(Boo);
                    InitObject(X);
                    body.Add(X);
                    //body.Add(Instantiate(Tsukuba));
                    //InitObject(body[0]);
                    list.RemoveAt(0);
                    break;
                case 'B':
                    X = Instantiate(CVn);
                    InitObject(X);
                    body.Add(X);
                    //body.Add(Instantiate(Tsukuba));
                    //InitObject(body[0]);
                    list.RemoveAt(0);
                    break;
                case 'C':
                    X = Instantiate(Aur);
                    InitObject(X);
                    body.Add(X);
                    //body.Add(Instantiate(Tsukuba));
                    //InitObject(body[0]);
                    list.RemoveAt(0);
                    break;
                case 'D':
                    X = Instantiate(Cas);
                    InitObject(X);
                    body.Add(X);
                    //body.Add(Instantiate(Tsukuba));
                    //InitObject(body[0]);
                    list.RemoveAt(0);
                    break;
                case 'E':
                    X = Instantiate(Peg);
                    InitObject(X);
                    body.Add(X);
                    //body.Add(Instantiate(Tsukuba));
                    //InitObject(body[0]);
                    list.RemoveAt(0);
                    break;
                case 'F':
                    X = Instantiate(Per);
                    InitObject(X);
                    body.Add(X);
                    //body.Add(Instantiate(Tsukuba));
                    //InitObject(body[0]);
                    list.RemoveAt(0);
                    break;
                case 'G':
                    X = Instantiate(Her);
                    InitObject(X);
                    body.Add(X);
                    //body.Add(Instantiate(Tsukuba));
                    //InitObject(body[0]);
                    list.RemoveAt(0);
                    break;
                case 'H':
                    X = Instantiate(Gala);
                    InitObject(X);
                    body.Add(X);
                    //body.Add(Instantiate(Tsukuba));
                    //InitObject(body[0]);
                    list.RemoveAt(0);
                    break;
                case 'I':
                    X = Instantiate(ISS);
                    InitObject(X);
                    body.Add(X);
                    //body.Add(Instantiate(Tsukuba));
                    //InitObject(body[0]);
                    list.RemoveAt(0);
                    break;
                default:
                    break;
            }
        }
        for (int i = 0; i < body.Count; i++)
        {
            FlowObject(body[0]);
            body2.Add(body[0]);
            body.RemoveAt(0);            
        }
        for (int i = 0; i < body2.Count; i++) {
            if (body2[i].position.x < -15 || body2[i].position.y < -5)
            {
                Destroy(body2[i].gameObject);
                body2.RemoveAt(i);
            }
        }
        if (Input.GetKeyUp(KeyCode.Space))
        {
            FlowObject(Star);
            FlowObject(Tsukuba);
            FlowObject(Tanni);
            //Send("Test Message");
            //Instantiate(Star);
            Debug.Log("AddForce");
        }
        else if (Input.GetKeyUp(KeyCode.S))
        {
            FlowObject(Star);
            list.RemoveAt(0);
        }
        else if (Input.GetKeyUp(KeyCode.T))
        {
            //FlowObject(Tanni);
            //Instantiate(Star);
            //Star2 = Instantiate(Star);
        }
        else if (Input.GetKeyUp(KeyCode.U))
        {
            //FlowObject(Tsukuba);
            //Destroy(Star2.gameObject);
        }
        else if (Input.GetKeyUp(KeyCode.Q))
        {
            //Star.AddForce(new Vector2( 250.0f,  250.0f));
            InitObject(Star);
            InitObject(Tsukuba);
            InitObject(Tanni);
        }
        //Star.AddForce(new Vector2(-500.0f, -500.0f));

        RText.GetComponent<Text>().text = Receive;
    }

    void InitObject(Rigidbody2D rb)
    {
        float OriginX, OriginY;
        OriginX = Random.Range(-15, 15);
        //OriginY = Random.Range(8, 12);
        OriginY = 8;
        rb.velocity = new Vector2(0, 0);
        rb.MovePosition(new Vector2(OriginX, OriginY));
        //Destroy(rb);
    }

    void FlowObject(Rigidbody2D rb)
    {
        //Instantiate(rb);
        float VeloX, VeloY;
        if (rb.position.x < 0.0f)
        {
            VeloX = Random.Range(2, 6);
            VeloY = Random.Range(-10, -8);
            rb.velocity = new Vector2(VeloX, VeloY);
        }else if (rb.position.x > 0.0f)
        {
            VeloX = Random.Range(-6, -2);
            VeloY = Random.Range(-10, -8);
            rb.velocity = new Vector2(VeloX, VeloY);
        }
    }

    void OnApplicationQuit()
    {
        Disconnect();
    }

    void Connect()
    {

        ws = new WebSocket(WSAddress);

        ws.OnOpen += (sender, e) => {
            Debug.Log("WebSocket Open");
        };

        ws.OnMessage += (sender, e) => {
            Debug.Log("Data: " + e.Data);
            s = e.Data.ToCharArray();
            //Receive = e.Data;
            for (int i = 0; i < e.Data.Length; i++)
            {
                list.Add(s[i]);     
            }
            
            //Debug.Log("WebSocket Message Type: " + e.Type + ", Data: " + e.Data);
        };

        ws.OnError += (sender, e) => {
            Debug.Log("WebSocket Error Message: " + e.Message);
        };

        ws.OnClose += (sender, e) => {
            Debug.Log("WebSocket Close");
        };

        ws.Connect();

    }

    void Disconnect()
    {
        ws.Close();
        ws = null;
    }

    void Send(string message)
    {
        ws.Send(message);
    }

}